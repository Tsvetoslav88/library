package org.vexelon.net.library;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.vexelon.net.library.config.LibraryProperties;

@SpringBootApplication
@EnableConfigurationProperties(LibraryProperties.class)
@PropertySource("shared-messages.properties")
public class LibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryApplication.class, args);
	}

}
