package org.vexelon.net.bike.models.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserSuccessResponse extends UserBaseResponse {
    private String token;
}
