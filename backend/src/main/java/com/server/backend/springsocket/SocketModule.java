package com.server.backend.springsocket;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.server.backend.entities.Bid;
import org.springframework.stereotype.Component;

@Component
public class SocketModule {
    private SocketIOServer server;

    public SocketModule() {
        // prevent accidental starting multiple servers
        if(server != null) return;
        Configuration config = new Configuration();
        // update host in production
        config.setHostname("0.0.0.0"); // default is "localhost"
        config.setPort(9092); // could be any port
        server = new SocketIOServer(config);

        // add connection event listeners
        server.addConnectListener(onConnected());
        server.addDisconnectListener(onDisconnected());

        // add room support (the data is the room name)
        server.addEventListener("join", String.class, onJoinRoom());
        server.addEventListener("leave", String.class, onLeaveRoom());

        // start socket.io server
        server.start();
    }

    // method to emit message to all connected clients
    public void emit(String event, Object data) {
        server.getBroadcastOperations().sendEvent(event, data);
    }

    // method to emit message to all connected clients in a room
    public void emitToRoom(String room, String event, Object data) {
        server.getRoomOperations(room).sendEvent(event, data);
    }

    private DataListener<Bid> onChatReceived() {
        return (client, data, ackSender) -> {
            emit("bid", data);
        };
    }

    private DataListener<String> onJoinRoom() {
        return (client, roomName, ackSender) -> {
            System.out.printf("Client[%s] - Joined room '%s'\n", client.getSessionId().toString(), roomName);
            // add client to room
            client.joinRoom(roomName);

            // message room that client connected
            emitToRoom(roomName, "join", "Client joined room: " + roomName);
        };
    }

    private DataListener<String> onLeaveRoom() {
        return (client, roomName, ackSender) -> {
            System.out.printf("Client[%s] - Left room '%s'\n", client.getSessionId().toString(), roomName);
            // remove client to room
            client.leaveRoom(roomName);

            // message room that client disconnected
            emitToRoom(roomName, "leave", "Client left room: " + roomName);
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
