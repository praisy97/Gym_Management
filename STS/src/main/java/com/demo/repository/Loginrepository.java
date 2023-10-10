package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.model.Login;

public interface Loginrepository extends JpaRepository<Login, String>
{

}
