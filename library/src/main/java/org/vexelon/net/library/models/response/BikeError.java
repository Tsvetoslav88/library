package org.vexelon.net.library.models.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BikeError {

    @JsonProperty(value = "code")
    private String error;

    @JsonProperty(value = "message")
    private String message;

}
