import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top p-0">
  <div className="container-fluid bg-success">
    <h1 className="navbar-brand d-none d-lg-block fw-bolder" href="#">GUVI Zen class Batch 55</h1><h1 className="navbar-brand d-block d-lg-none fw-bloder" href="#">GUVI</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/'>Student Data</Link>
        </li>
        <li className="nav-item">
        <Link to='/create'>Create</Link>
        </li>
        <li className="nav-item">
        <Link to='/products'>Edit or Delete</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        
    );
};

export default Navbar;