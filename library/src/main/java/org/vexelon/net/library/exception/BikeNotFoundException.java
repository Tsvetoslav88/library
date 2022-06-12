package org.vexelon.net.library.exception;

public class BikeNotFoundException extends BikeException {
    public BikeNotFoundException(String errorCode, String errorMessage) {
        super(errorCode, errorMessage);
    }
}
