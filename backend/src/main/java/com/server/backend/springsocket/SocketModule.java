package com.server.backend.springsocket;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketConfig;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.server.backend.entities.Bid;
import lombok.val;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class SocketModule {
    private SocketIOServer server;

    public SocketModule() {
        // prevent accidental starting multiple servers
        if(server != null) return;
        val config = new Configuration();
        config.setPort(9092);
        val sockConfig = new SocketConfig();
        sockConfig.setReuseAddress(true);
        config.setSocketConfig(sockConfig);
        server = new SocketIOServer(config);
        Runtime.getRuntime().addShutdownHook(new Thread(server::stop));

        server = new SocketIOServer(config);

        // add connection event listeners
        server.addConnectListener(onConnected());
        server.addDisconnectListener(onDisconnected());

        // add room support (the data is the room name)
        server.addEventListener("join", String.class, onJoinRoom());
        server.addEventListener("leave", String.class, onLeaveRoom());
//        server.addEventListener("auctionUpdate", String.class, onAuctionReceived());
        server.addEventListener("bid", Bid.class, onBidReceived());
        server.addEventListener("newMsg", String.class, onMessage());
        // start socket.io server
        server.start();
    }

    public void emit(String event, Object data) {
        server.getBroadcastOperations().sendEvent(event, data);
    }

    public void emitToRoom(String room, String event, Object data) {
        server.getRoomOperations(room).sendEvent(event, data);
    }

    private DataListener<String> onMessage() {
        return (client, data, ackSender) -> {

        };
    }

    private DataListener<Bid> onBidReceived() {
        return (client, data, ackSender) -> {
            System.out.printf("Client[%s] - Received bid '%s'\n", client.getSessionId().toString(), data);

            // send message to all connected clients
            emit("bid", data);
        };
    }

    private DataListener<String> onJoinRoom() {
        return (client, roomName, ackSender) -> {
            System.out.printf("Client[%s] - Joined room '%s'\n", client.getSessionId().toString(), roomName);
            // add client to room
            client.joinRoom(roomName);
            var amountOfClients = server.getRoomOperations(roomName).getClients().size();
            // message room that client connected
            emitToRoom(roomName, "join", amountOfClients);
        };
    }

    private DataListener<String> onLeaveRoom() {
        return (client, roomName, ackSender) -> {
            System.out.printf("Client[%s] - Left room '%s'\n", client.getSessionId().toString(), roomName);
            var amountOfClients = server.getRoomOperations(roomName).getClients().size() -1;
            // message room that client disconnected
            emitToRoom(roomName, "leave", amountOfClients);
            // remove client to room
            client.leaveRoom(roomName);
        };
    }

    private ConnectListener onConnected() {
        return client -> {
            System.out.printf("Client[%s] - Has connected\n", client.getSessionId().toString());
        };
    }

    private DisconnectListener onDisconnected() {
        return client -> {
            System.out.printf("Client[%s] - Disconnected\n", client.getSessionId().toString());
        };
    }

}
