import React from 'react'
import './Service.css'

export default function Service() {
  return (
    <div className='cards'>
            <div class="cartItem">
                <img src="./assests/image.png" height='250px' class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title fw-bolder title">Spa & Massage </h5>
                <p class="description fw-light fs-6">If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text</p>
                <a href="/" class="readMore">Read More</a>
                </div>
            </div>
            <div class="cartItem">
                <img src="./assests/image2.png" height='250px' class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title fw-bolder title">Hair & Beauty</h5>
                <p class="description fw-light fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="readMore">Read More</a>
                </div>
            </div>
            <div class="cartItem">
                <img src="./assests/image3.png" height='250px' class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title fw-bolder title">Body Treatement</h5>
                <p class="description fw-light fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="readMore">Read More</a>
                </div>
            </div>
    </div>
  )
}
