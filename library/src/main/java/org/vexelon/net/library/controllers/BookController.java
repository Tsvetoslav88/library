package org.vexelon.net.library.controllers;

import java.util.List;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.vexelon.net.library.entity.Book;
import org.vexelon.net.library.repositories.BookRepository;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;

	@GetMapping
	public List<Book> list() {
		return bookRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	@ApiOperation(value = "Create Book")
	public void create(@RequestBody Book book) {
		bookRepository.save(book);
	}


	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") long id) {
		bookRepository.deleteById(id);}
	
	@GetMapping("/{id}")
	public Book get(@PathVariable("id") long id) {
		return bookRepository.getOne(id);
	}
}
