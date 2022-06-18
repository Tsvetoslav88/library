package org.vexelon.net.library.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@ConfigurationProperties("shared-messages")
@Getter
//@Setter
public class LibraryProperties {
    private final Map<String, String> messages = new HashMap<>();


}
