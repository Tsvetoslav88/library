package org.vexelon.net.bike.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vexelon.net.bike.entity.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long>{

}
