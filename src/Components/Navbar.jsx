import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info-subtle">
       <div className="container-fluid">
  {/* <Link to='#'>Guvi</Link> */}
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav">
      <li className="nav-item">
        <Link to ='/'>All</Link>  
      </li>
      <li className="nav-item">
        <Link to ='/fullstack'>Full Stack Developer</Link> 
      </li>
      <li className="nav-item">
       <Link to ="/cybersecurity">CyberSecurity</Link>
      </li>
      <li className="nav-item">
      <Link to ='/datascience'>DataScience</Link>
      </li>
      <li className="nav-item">
      <Link to ='/career'>Career</Link>
      </li>
    </ul>
  </div>
</div>

</nav>
        </div>
    );
};

export default Navbar;