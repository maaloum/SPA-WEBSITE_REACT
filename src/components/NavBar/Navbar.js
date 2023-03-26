import React from 'react'
import './NavBar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg d-flex  justify-content-between align-items-between navbar-light bg-white px-5">
            <div>
            <a className="navbar-brand fs-6 fw-bolder" href="/">Beautyness</a>
            <i class="fa fa-phone px-2 fs-6 fw-light"> Call us (+) 222 36 30 33 37</i>
            </div>
        
        <div className="d-flex " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex">
                    <li className="nav-item active ">
                        <a className="nav-link fs-6" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                    </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                    </li>
                    <li className='mb-0'>
                        <i className="fa fa-facebook mb-0 p-3 mt-0" aria-hidden="true" ></i>
                        <i className='fa fa-twitter mb-0 pe-3 mt-0' ></i>
                        <i className='fa fa-linkedin mb-0 pe-3 mt-0'  ></i>
                    </li>
                </ul>
                <form className="form-inline  mr-sm-2 my-lg-0">
                <button className="reservation" type="submit"><i class="fa fa-calendar-minus-o" aria-hidden="true">  Resevations</i></button>
                </form>
        </div>
       
  </nav>
  )
}
