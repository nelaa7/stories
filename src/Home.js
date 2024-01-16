// Navbar.js

import React from 'react';
// import { Link } from 'react-router-dom'; // Jika Anda menggunakan React Router
import './Navbar.css';
import './Sidebar.css';


export const Navbar = () => {
  return (
    <nav>
          <img src='' alt=''/>
    </nav>
  );
};

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>Management Story</li>
        <li>Add Story</li>
        <li>Delete Story</li>
        <li>Update Story</li>
      </ul>
    </div>
  )
}

const exportObject = {
  Navbar,
  Sidebar
};

export default exportObject;

