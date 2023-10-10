package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.model.Train;

public interface Trainrepository extends JpaRepository<Train, Integer>
{

}
