import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
function CreateEmployeeComponent() {

   let navigate=useNavigate(); 

   const[employee,setEmployee]=useState({
    firstName:"",
    lastName:"",
    email:""
   })

    const cancelHandle=(e)=>
    {
        e.preventDefault();
        navigate("/employees");
    }
    const handleChange=(e)=>
    {
        const name=e.target.name;
        const value=e.target.value;
        setEmployee({...employee,[name]:value});
    }
    const saveHandle=(e)=>
    {
        e.preventDefault();
        console.log(JSON.stringify(employee));
        EmployeeService.addEmployee(employee).then((res)=>
        {
            navigate("/employees");
        })
    }
    return (
    <div className='container'>
        <div className='row mt-4 '>
            <div className='col-7 offset-md-3 '>
            
            <div className='card p-5'>
            <h3 className='text-center'>Add Employee</h3>
                <form>
                    <div className='form-group'>
                        <label className='my-3'>First Name :</label>
                        <input type="text" name="firstName" id='firstName' className='form-control'
                        value={employee.firstName}
                        onChange={handleChange}/>
                       
                        <label className='my-3'>Last Name :</label>
                        <input type="text" name="lastName" id='lastName' className='form-control'
                        value={employee.lastName}
                        onChange={handleChange}/>
                        
                        <label className='my-3'>Email :</label>
                        <input type="text" name="email" id='email' className='form-control' 
                         value={employee.email}
                         onChange={handleChange}/>
                    
                    <button className='mt-3 btn btn-danger ms-3' onClick={cancelHandle}>cancel</button>
                    <button className='mt-3 btn btn-success ms-3' onClick={saveHandle}>save</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEmployeeComponent;
