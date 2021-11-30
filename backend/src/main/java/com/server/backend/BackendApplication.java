package com.server.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.swing.*;
import java.util.Collections;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		String PORT = System.getenv("PORT");
		SpringApplication app = new SpringApplication(BackendApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", PORT == null ? 4000 : PORT));
		app.run(args);
	}

}
