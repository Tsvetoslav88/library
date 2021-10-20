package org.vexelon.net.bike.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.vexelon.net.bike.entity.Bike;
import org.vexelon.net.bike.repositories.BikeRepository;

@RestController
@RequestMapping("/api/v1/bikes")
public class BikesController {
	
	@Autowired
	private BikeRepository bikeRepository;

	@GetMapping
	public List<Bike> list() {
		return bikeRepository.findAll(); 
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Bike bike) {
		bikeRepository.save(bike);
	}


	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") long id) {bikeRepository.deleteById(id);}
	
	@GetMapping("/{id}")
	public Bike get(@PathVariable("id") long id) {
		return bikeRepository.getOne(id);
	}
}
