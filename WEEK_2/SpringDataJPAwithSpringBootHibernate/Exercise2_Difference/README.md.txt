JPA vs Hibernate vs Spring Data JPA

This repository is a small Spring Boot project I built to understand the difference between JPA, Hibernate, and Spring Data JPA. Instead of just reading theory, I created a working example with an Employee entity connected to a MySQL database.

What This Project Does

The project has a simple Employee table. I wrote code to insert employee records into MySQL and fetch them back using Spring Data JPA. The goal was to see how these three technologies actually work together in a real application, not just in definitions.

What is JPA

JPA stands for Java Persistence API. It is not a tool or a library, it is just a specification (a set of rules) that tells how Java objects should be mapped to database tables. JPA itself does not do anything on its own. It needs an implementation to actually work.

What is Hibernate

Hibernate is the actual implementation of JPA. It is the tool that does the real work behind the scenes, like converting Java objects into SQL queries and talking to the database. When we use JPA annotations like @Entity or @Table, it is Hibernate that reads them and generates the SQL for us.

What is Spring Data JPA

Spring Data JPA is built on top of JPA and Hibernate. It removes most of the boilerplate code we normally have to write. Instead of writing DAO classes with a lot of SQL and JDBC code, we just extend JpaRepository and Spring gives us methods like save(), findAll(), and findById() for free.

How I Used Them in This Project


Created an Employee entity class with JPA annotations to map it to a MySQL table.
Created an EmployeeRepository interface that extends JpaRepository, so I did not have to write any SQL manually.
Created an EmployeeService class to handle the business logic and call the repository methods.
Connected the project to MySQL using application.properties.
Inserted employee records into the database and retrieved them back using the methods provided by JpaRepository.


Conclusion

Doing this exercise helped me understand that JPA is just the rulebook, Hibernate is the one following those rules and doing the actual work, and Spring Data JPA makes our life easier by hiding the repetitive code. Now I can clearly explain the difference instead of just memorizing it.