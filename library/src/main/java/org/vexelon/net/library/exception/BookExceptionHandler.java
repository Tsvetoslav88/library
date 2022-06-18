package org.vexelon.net.library.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.vexelon.net.library.models.response.BookError;

@ControllerAdvice
@Slf4j
public class BookExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public final ResponseEntity<BookError> handleDownloadGroupNotFoundException(BookNotFoundException ex) {
        log.error("Bike not found: {}", ex.getErrorMessage());
        return new ResponseEntity<>(BookError.builder().error(ex.getErrorCode()).message(ex.getErrorMessage()).build(), HttpStatus.BAD_REQUEST);

    }
}
