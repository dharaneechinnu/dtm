import React from 'react'
import { Link } from 'react-router-dom'
const Lancer = ({search,setsearch}) => {
  return (
    
 <>
    <nav className='Navs'>
    <h2 className='titlelogo'><Link to="/dashboard">Freelancer</Link></h2>
      <ul className='navbar-menu'>
        <li><Link to="/dd">Home</Link> </li>
        <li><Link to="/Freeabout">About</Link> </li>
        <li><Link to="/">Logout</Link> </li>
      </ul>
   </nav>

  
   </>
  )
 }
 export default Lancer