package org.vexelon.net.library.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.vexelon.net.library.config.LibraryProperties;
import org.vexelon.net.library.entities.BookEntity;
import org.vexelon.net.library.exception.BookNotFoundException;
import org.vexelon.net.library.models.request.CreateBookRequest;
import org.vexelon.net.library.models.response.BookResponse;
import org.vexelon.net.library.repositories.BookRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {

    private BookRepository bookRepository;
    private LibraryProperties libraryProperties;

    @Autowired
    public BookService(BookRepository bookRepository,
                       LibraryProperties libraryProperties) {
        this.bookRepository = bookRepository;
        this.libraryProperties = libraryProperties;
    }

    public Long createBook(CreateBookRequest createBookRequest) {

        BookEntity bookEntity = bookRepository.save(BookEntity.builder()
                .author(createBookRequest.getAuthor())
                .description(createBookRequest.getDescription())
                .genre(createBookRequest.getGenre())
                .title(createBookRequest.getTitle())
//                        .releaseDate(createBookRequest.getReleaseDate())
                .build());

        return bookEntity.getId();
    }

    public List<BookResponse> getBooks() {
        List<BookEntity> bookEntities = bookRepository.findAll();
        return bookEntities.stream()
                .map(this::mapBookEntityToModel)
                .collect(Collectors.toList());
    }

    public BookResponse getBookById(long id) throws BookNotFoundException {

        BookEntity bookEntity = bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException("LIBRARY_10001", libraryProperties.getMessages().get("LIBRARY_10001") + id));

        return BookResponse.builder()
                .id(bookEntity.getId())
                .author(bookEntity.getAuthor())
                .description(bookEntity.getDescription())
                .genre(bookEntity.getGenre())
                .title(bookEntity.getTitle())
//                .releaseDate()
//                .ratingScore(String.valueOf(bookEntity.getRatingScore()/bookEntity.getRatingVoteCount()))
                .build();
    }

    private BookResponse mapBookEntityToModel(BookEntity bookEntity) {
        return BookResponse.builder()
                .id(bookEntity.getId())
                .author(bookEntity.getAuthor())
                .description(bookEntity.getDescription())
                .genre(bookEntity.getGenre())
                .title(bookEntity.getTitle())
//                .releaseDate()
//                .ratingScore(String.valueOf(bookEntity.getRatingScore()/bookEntity.getRatingVoteCount()))
                .build();
    }
}
