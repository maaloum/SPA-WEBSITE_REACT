import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div class=" text-dark ">
        <img src="./assests/background.png" class="imgbackground" alt="maincard"/>
        <div class="card-img-overlay content d-flex flex-column justify-content-center align-itemes-center ">
        <p class="card-text fw-bolder fs-1">Beauty is power a smile is its <br></br> sword.</p>
        <p class="card-text secondery">There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</p>
        <button className="reservationbtn" type="submit"> Make a Resevation</button>
        </div>
    </div>
  )
}
