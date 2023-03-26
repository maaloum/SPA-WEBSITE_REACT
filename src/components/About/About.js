import React from 'react'
import './About.css'

export default function About() {
  return (
    <div class=" container">
        <div class="left ">
            <div className='content'>
                <h1>The Beauty is about 
                being Comfortable
                in your own skin!</h1>
            </div>
            <div className='subcontent'>
                <p>There are many variation of passages are Ipsum available, majority have suffered alteration in some form.</p>
            </div>
            <div className='pictures'>
                <img src="./assests/pic1.png" alt="pic1"/>
                <img src="./assests/pic2.png" alt="pic2"/>
                <img src="./assests/pic3.png" alt="pic3"/>
            </div>
        </div>
        <div className='right '>
        <img src="./assests/pic.png" class="imgbackground" alt="maincard"/>
    </div>
    </div>
  )
}
