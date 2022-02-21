import React from 'react'
import '../Hero/Hero.css'
import hero from '../Hero/hero1.png'

export default function Hero() {
    return (        
    <section className="home">
    <div className="content">
    <h3>Welcome</h3>
    <p>Click on "get users" button to Fetch Users</p>
    </div>
    <div className="image">
    <img src={hero} alt="Hero"/>
    </div>
    </section>
    )
}