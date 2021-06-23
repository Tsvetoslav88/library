package org.vexelon.net.bike.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vexelon.net.bike.models.user.UserErrorResponse;
import org.vexelon.net.bike.models.user.UserBaseResponse;
import org.vexelon.net.bike.models.user.UserRequest;
import org.vexelon.net.bike.models.user.UserSuccessResponse;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @PostMapping("/login")
    public ResponseEntity<UserBaseResponse> login(@RequestBody UserRequest userRequest) {
        if (userRequest.getUsername().equals("Wrong")) {
            return new ResponseEntity<>(UserErrorResponse.builder().message("User '" + userRequest.getUsername() + "' does not exist").build(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(UserSuccessResponse.builder().token("12356").build(), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<UserBaseResponse> register(@RequestBody UserRequest userRequest) {
        if (userRequest.getUsername().equals("Wrong")) {
            return new ResponseEntity<>(UserErrorResponse.builder().message("User '" + userRequest.getUsername() + "' already exists").build(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(UserSuccessResponse.builder().token("12356").build(), HttpStatus.OK);
    }

}
