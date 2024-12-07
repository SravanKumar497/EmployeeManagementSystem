import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
function UpdateEmployeeComponent()
 
{
    const navigate=useNavigate();

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const {id}=useParams();
  
    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res)=>
        {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        })
    },[])

    const updateHandler=(e)=>
    {
      e.preventDefault();
      const employee={firstName,lastName,email};
      if(id)
      {
        EmployeeService.updateEmployee(id,employee).then((res)=>
        {
            navigate("/employees");
        })
      }
      else{
        EmployeeService.addEmployee(employee).then((res)=>
        {
          navigate("/employees");
        })
      }
    }
  
    const cancelHandle=(e)=>
    {
      e.preventDefault();
      navigate("/employees");
    }
  
    return (
        <div className='container'>
            <div className='row mt-2'>
               <div className='col-0 offset-md-3'>
                 <div className='card p-5'>
                 <h4 className='text-center'> Update Employee </h4> 
                    <form>
                       <div className='form-group'>
                           <label className='my-3'>First Name :</label>
                           <input type="text" name="firstName" id='firstName' className='form-control'
                           value={firstName}
                           onChange={(e)=> setFirstName(e.target.value)}
                          />
                         
                           <label className='my-3'>Last Name :</label>
                           <input type="text" name="lastName" id='lastName' className='form-control'
                           value={lastName}
                           onChange={(e)=> setLastName(e.target.value)}
                          />
                         
                           <label className='my-3'>Email :</label>
                           <input type="text" name="email" id='email' className='form-control'
                           value={email}
                           onChange={(e)=> setEmail(e.target.value)}
                          />
                         
                           <button className='mt-3 btn btn-danger' onClick={cancelHandle}>cancel</button>
                           <button className='mt-3 btn btn-success ms-3' onClick={updateHandler}>save</button>
                       </div>
                     </form>
                 </div>
               </div>
             </div> 
       </div>
   
     )
   }
   
   export default UpdateEmployeeComponent
   