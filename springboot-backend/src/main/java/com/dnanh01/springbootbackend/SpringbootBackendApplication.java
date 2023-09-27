package com.dnanh01.springbootbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.dnanh01.springbootbackend.model.Employee;
import com.dnanh01.springbootbackend.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner{
	

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
		System.out.println("App is working!");
	}

	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
		// Employee employee = new Employee();
		// employee.setFirstName("Nguyen Anh");
		// employee.setLastName("Anh");
		// employee.setEmailId("donguyenanh2k1@gmail.com");
		// employeeRepository.save(employee);
	}
}
