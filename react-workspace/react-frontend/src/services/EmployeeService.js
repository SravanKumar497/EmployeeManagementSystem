import axios from 'axios';

const EMPLOYEE_API="http://localhost:9191/api/v1/employees";

class EmployeeService
{
    getEmployees()

{
    return axios.get(EMPLOYEE_API);
}
    addEmployee(employee)
    {
        return axios.post(EMPLOYEE_API,employee)
    }
    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API+'/'+employeeId)
    }
    updateEmployee(employeeId,employee)
    {
        return axios.put(EMPLOYEE_API+'/'+employeeId,employee);
    }
    deleteEmployee(employeeId)
    {
        return axios.delete(EMPLOYEE_API+'/'+employeeId);
    }
}
export default new EmployeeService();