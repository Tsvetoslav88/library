package org.vexelon.net.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vexelon.net.library.entities.BookEntity;

public interface BookRepository extends JpaRepository<BookEntity, Long>{

}
