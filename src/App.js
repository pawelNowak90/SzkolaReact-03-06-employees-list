import React from 'react';

import Employees from './components/Employees/Employees.js'
import './App.css';



function App() {
  const data= [
    {
      id:1,
    name:'Jan',
    surname:'Kowalski',
    profession:'CEO'}
    ,
        {
          id:2,
        name:'Anna',
        surname:'Nowak',
        profession:'grafik'
      },
    {
      id:3,
    name:'Marian',
    surname:'Malinowski',
    profession:'CTO'
  },
        {
          id:4,
        name:'Adam',
        surname:'Polak',
        profession:'programmer'
      }
  ];


  return (
    <div className="App">
      <Employees data={data}/>
    </div>
  );
}

export default App;
