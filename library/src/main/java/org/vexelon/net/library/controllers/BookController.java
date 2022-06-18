package org.vexelon.net.library.controllers;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vexelon.net.library.exception.BookNotFoundException;
import org.vexelon.net.library.models.request.CreateBookRequest;
import org.vexelon.net.library.models.response.BookResponse;
import org.vexelon.net.library.services.BookService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
	private BookService bookService;

	@Autowired
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

	@GetMapping
//	@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	public ResponseEntity<List<BookResponse>> list() {
		return ResponseEntity.ok(bookService.getBooks());
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	@ApiOperation(value = "Create Book")
	public ResponseEntity<Long> create(@RequestBody CreateBookRequest createBookRequest) {
		return ResponseEntity.ok(bookService.createBook(createBookRequest));
	}


//	@DeleteMapping("/{id}")
//	@ResponseStatus(HttpStatus.OK)
//	public ResponseEntity<Long> delete(@PathVariable("id") long id) {
//		return ResponseEntity.ok(id);
//	}
	
	@GetMapping("/{id}")
	public ResponseEntity<BookResponse> get(@PathVariable("id") long id) throws BookNotFoundException {
		return ResponseEntity.ok(bookService.getBookById(id));
	}
}
