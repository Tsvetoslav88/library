package org.vexelon.net.library.controllers;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.vexelon.net.library.entity.Book;
import org.vexelon.net.library.repositories.BookRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;

	@GetMapping
//	@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
	public ResponseEntity<List<Book>> list() {
		return ResponseEntity.ok(bookRepository.findAll());
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	@ApiOperation(value = "Create Book")
	public ResponseEntity<Long> create(@RequestBody Book book) {
		return ResponseEntity.ok(bookRepository.save(book).getId());
	}


	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Long> delete(@PathVariable("id") long id) {
		return ResponseEntity.ok(id);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Book> get(@PathVariable("id") long id) {
		return ResponseEntity.ok(bookRepository.getOne(id));
	}
}
