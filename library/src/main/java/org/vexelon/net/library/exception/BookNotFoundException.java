package org.vexelon.net.library.exception;

public class BookNotFoundException extends BookException {
    public BookNotFoundException(String errorCode, String errorMessage) {
        super(errorCode, errorMessage);
    }
}
