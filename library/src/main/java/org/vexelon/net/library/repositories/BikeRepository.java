package org.vexelon.net.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vexelon.net.library.entity.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long>{

}
