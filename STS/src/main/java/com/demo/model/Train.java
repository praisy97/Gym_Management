package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Train {

	@Id
	private int tid;
	private String tname;
	private int phno;
	private String pacage;
	private String trainer;
	
	public Train() {
		super();
	}

	public Train(int tid, String tname, int phno, String pacage, String trainer) {
		super();
		this.tid = tid;
		this.tname = tname;
		this.phno = phno;
		this.pacage = pacage;
		this.trainer = trainer;
	}

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public int getPhno() {
		return phno;
	}

	public void setPhno(int phno) {
		this.phno = phno;
	}

	public String getPacage() {
		return pacage;
	}

	public void setPacage(String pacage) {
		this.pacage = pacage;
	}

	public String getTrainer() {
		return trainer;
	}

	public void setTrainer(String trainer) {
		this.trainer = trainer;
	}
	
	
}
