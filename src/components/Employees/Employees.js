import React, {useState} from 'react';

import './Employees.css';
import EmployeesList from './components/EmployeesList.js';
import EmployeesDetails from './components/EmployeesDetails.js';

const Employees = ({data}) => {

    const employeeExample={"name":"-name-",
                    "surname":"-surname-",
                    "profession":"-your profession-"};

    const [user, setUser] = useState(employeeExample);

    const changeMethod = (name) =>{
        setUser(name);
        
    }

    return ( 
        <div className="employees-wrapper">
            <EmployeesList data={data} click={changeMethod}/>
            <EmployeesDetails data={data} user={user}/>

        </div>
     );
}
 
export default Employees;