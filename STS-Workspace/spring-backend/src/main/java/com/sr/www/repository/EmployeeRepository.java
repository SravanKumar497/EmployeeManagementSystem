package com.sr.www.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sr.www.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>

{

}
