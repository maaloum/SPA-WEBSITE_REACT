import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div class="card text-white">
    <img src="./assests/background.png" class="card-img" alt="..."/>
    <div class="card-img-overlay d-flex mt-4 flex-column align-items-start justify-content-center text-dark mx-0 mx-lg-5 desc">
      <h3 class="card-text firstHeader">Beauty is power a smile is its sword.</h3>
      <p class="card-text paragraphe ">There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</p>
      <button className="reservationbtn py-0 mt-0 mt-lg-3 py-lg-3" type="submit"> Make a Resevation</button>
    </div>
  </div>
  )
}
