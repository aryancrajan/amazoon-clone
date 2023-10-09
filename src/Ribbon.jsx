import React from "react";
import hamburger from './assets/hamburger.svg'

function Ribbon(){
      return(
     <div className='ribbon'>
      <img className='ham-logo' alt='logo' src={hamburger}/>
      <p className='menu'><b>All</b></p>
      <p className='menu'><b>Amazon miniTV</b></p>
      <p className='menu'><b>Sell</b></p>
      <p className='menu'><b>Best Sellers</b></p>
      <p className='menu'><b>Today's Deals</b></p>
      <p className='menu'><b>Mobiles</b></p>
      <p className='menu'><b>Customer Service</b></p>
      <p className='menu'><b>Prime</b></p>
      <p className='menu'><b>New Releases</b></p>
      <p className='menu'><b>Electronics</b></p>
      <p className='menu'><b>Gift Ideas</b></p>
      <p className='menu'><b>Fashion</b></p>
      </div>
      )
}

export default Ribbon