package org.vexelon.net.library.models.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserSuccessResponse extends UserBaseResponse {
    private String token;
    private Integer type;
}
