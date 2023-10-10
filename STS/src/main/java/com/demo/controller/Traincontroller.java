package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.demo.model.Train;
import com.demo.model.Login;
import com.demo.repository.Trainrepository;
import com.demo.repository.Loginrepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Traincontroller 
{
	
	@Autowired
	private Trainrepository crepo;
	
	@Autowired
	private Loginrepository lrepo;

	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Login l1)
	{
		Login l3 = l1;
		
		String first = l3.getUid();
		String second = l3.getUpswd();
		Login l4 = lrepo.getOne(first);
		boolean flag = lrepo.existsById(first);
		if(flag)
		{
			if(second.equals(l4.getUpswd()))
			  return ResponseEntity.ok(l3);	
		}
		return (ResponseEntity<Login>) ResponseEntity.internalServerError();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insert")
	public Train insert(@RequestBody Train c1)
	{
		return this.crepo.save(c1);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/update")
	public Train update(@RequestBody Train c1)
	{
		return this.crepo.save(c1);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/delete")
	public void delete(@RequestBody Train c1)
	{
		this.crepo.delete(c1);
	}
	
    @CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/view")
	public List<Train> view()
	{
		return this.crepo.findAll();
	}

}






