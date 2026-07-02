package com.cognizant;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.model.Employee;
import com.cognizant.service.EmployeeService;

@SpringBootApplication
public class DifferencebetweenJPAHibernateandSpringDataJPAApplication implements CommandLineRunner {

    private final EmployeeService employeeService;

    public DifferencebetweenJPAHibernateandSpringDataJPAApplication(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    public static void main(String[] args) {
        SpringApplication.run(DifferencebetweenJPAHibernateandSpringDataJPAApplication.class, args);
    }

    @Override
    public void run(String... args) {

        employeeService.addEmployee(new Employee(101, "Anand Raju", "Development"));
        employeeService.addEmployee(new Employee(102, "Rahul", "Testing"));

        List<Employee> employees = employeeService.getAllEmployees();

        System.out.println("----------- Employee List -----------");

        employees.forEach(System.out::println);
    }
}