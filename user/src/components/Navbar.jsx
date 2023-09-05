import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faClock } from '@fortawesome/free-solid-svg-icons'; 

import './Navbar.css';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
}

  return (
    <div className="navbar-container">
      <nav className="navbar">
        

       { auth ?(
        <ul className="navbar-menu">
          <li className="navbar-item">
           
            <Link to="/" className='navbar-link'>
                <FontAwesomeIcon icon={faHome} /> Homepage
              </Link>
          </li>
          
          <li>
            <FontAwesomeIcon icon={faClock} /> {formattedTime}
          </li>
          <li  className="navbar-item">
                <Link onClick={logout} to="/signup" className='navbar-link'>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </Link>
              </li>
        </ul>
       ) : (
       <ul className="navbar-menu">
       <li className="navbar-item">
         <FontAwesomeIcon icon={faClock} /> {formattedTime}
       </li>
       <li className="navbar-item">
        < Link to = "/Login" className='navbar-link' > Login </Link></li >
        <li className="navbar-item"> 
        < Link to = "/signup" className='navbar-link'> Signup </Link> </li>


     </ul>
   )}


      </nav>
    </div>
  );
};

export default Navbar;
