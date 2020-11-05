import React from 'react';

import './EmployeesList.css';

const EmployeesList = ({data, click}) => {

    return (  
       <React.Fragment>
           <div className="employees-list">
                <ul>
                    {data.map(item => (
                    <li key={`employee${item.id}`}
                        id={item.id}>
                        <button onClick={()=>click(item)}>{item.name} {item.surname}</button>
                    </li>) )}
                </ul>
            </div>
        </React.Fragment>
    );
}
 
export default EmployeesList;