import React from 'react'
import "bootstrap/js/src/collapse.js";
import './NavBar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div class="container-fluid">
    <a class="navbar-brand fw-bolder" href="#">Beautyness</a>      
    <i class="fa fa-phone px-2 fs-6 fw-light phone"> Call us (+) 222 36 30 33 37</i>
    <button class="navbar-toggler"
     type="button"
      data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars navbar-collapse" aria-hidden="true"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <a class="nav-link active p-2 p-lg-3" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-2 p-lg-3" href="#">Pages
          <i class="fa fa-angle-down p-1" aria-hidden="true"></i>
          </a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link p-2 p-lg-3" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-2 p-lg-3" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  p-2 p-lg-3" href="#">Contact</a>
        </li>
        <li>
            <a><i className="fa fa-facebook icon p-2 p-lg-3 " aria-hidden="true" ></i></a>
            <a><i className='fa fa-twitter icon p-2 p-lg-3 ' ></i></a>
            <a><i className='fa fa-linkedin icon p-2 p-lg-3'  ></i></a>
        </li>
      </ul>
      <button className="reservation m-1 mx-lg-5" type="submit"><i class="fa fa-calendar-minus-o" aria-hidden="true">  Resevations</i></button>
    </div>
  </div>
  </nav>
  )
}
