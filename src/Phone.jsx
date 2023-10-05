import React from "react";
import i from './assets/information.svg'
import './phone.css'

function Phone(props)
    {
     const {pic,name,price} =props   
    return(
            <div className="product">
                <img src={pic} alt="phone"  className="phone-pic"/>
                <div className="details">
                    <p>sponsored <img src={i} alt='i' /></p>
                    <p>
                    {name} (Phantom Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers
                    </p>
                    <p><span className="real-price"> {price}</span> <span className="old-price"> ₹1,71,999 </span> Save ₹22,000 (13%)</p>
                    <p>FREE Delivery by Amazoon.</p>
                    <p>This item will be released on September 10, 2021.</p>
                </div>
            </div>
    )
    }

export default Phone