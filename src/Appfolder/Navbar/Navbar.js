import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
         <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img class="navbar-brand imagelogo" src="/resources/logo/Preeti's fashion store Logo (1).png"
     alt="Preeti's Fashion store" width="80px"></img>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><Link to = '/'>Home</Link></a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link active dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Products</a>
    <ul class="dropdown-menu">
      <li><button class="dropdown-item"><Link to = '/Clothing'>Clothing</Link></button></li>
      <li><a class="dropdown-item" href="#"><Link to = '/Accessories'>Accesories</Link></a></li>
      {/* <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li> */}
    </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to = '/Cart'>Cart</Link></a>
        </li>
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
