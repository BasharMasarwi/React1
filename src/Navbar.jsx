import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    
    <div className='ps-5 bg-info'>
    <nav className="navbar   navbar-expand-lg  ">
  <div className="container ps-5 me-5">
    <div className='ps-5 ms-5'>
       <a className="nav-link" href="Index.js">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    </div>
 
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="Index.js">Home</a>
        <a className="nav-link" href="Index.js">Features</a>
        <a className="nav-link" href="Index.js">Pricing</a>
        
      </div>
    </div>
  </div>
</nav>
    </div>
    


    
  )
}
