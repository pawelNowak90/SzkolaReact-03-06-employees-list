import React from 'react';

import './EmployeesDetails.css';

const EmployeesDetails = ({data, user}) => {
    return (  
        <div className="employees-details">
            <ul>
                <li>Imię : {user.name}</li>
                <li>Nazwisko : {user.surname}</li>
                <li>Stanowisko : {user.profession}</li>

            </ul>
        </div>
    );
}
 
export default EmployeesDetails;

