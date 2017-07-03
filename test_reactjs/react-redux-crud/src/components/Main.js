import React from 'react';
import {Link} from 'react-router-dom';


const Main = () => (
    <nav className = 'ui visible sidebar thin vertical menu'>
      <ul>
        <li className='item'><Link to='/'>Home</Link></li>
        <li className='item'><Link to='/departments'>Departments</Link></li>
        <li className='item'><Link to='/employees'>Employees</Link></li>
      </ul>
    </nav>
)

export default Main;