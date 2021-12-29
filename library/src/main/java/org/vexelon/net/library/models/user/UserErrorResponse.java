package org.vexelon.net.library.models.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserErrorResponse extends UserBaseResponse {
    private String message;
}
