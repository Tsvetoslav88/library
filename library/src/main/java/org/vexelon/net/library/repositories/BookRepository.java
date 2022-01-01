package org.vexelon.net.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vexelon.net.library.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
