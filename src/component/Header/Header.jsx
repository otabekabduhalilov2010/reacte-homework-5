import React from 'react'
import './Header.css'
const Header = () => {
  return (
 <>
 
 <header className="header" >
    <div className="container">
      <nav  className="nav" >
        <div className="menu1">
          Digital Agency
        </div>
    <div className="menu">
      <a href="">home</a>
      <a href="">About</a>
      <a href="">Testimonials</a>
      <a href="">contact</a>
    </div>
      </nav>
      
      <div className="title">
        <div className="wrap1">
          <h1>
            Building digital <br/> products, brands <br/> & experience              
          </h1>
          <p>Digital Agency is your online team mangement tool that <br/> easy and prompt
          </p>
          <button  className="clik1">
            Contact Us
          </button>
  </div>
  <img src="./img/business-people-discussing-business-idea.png" alt="" className="photo1"/>

  
</div>
</div>

</header>

 
 </>
  )
}

export default Header
