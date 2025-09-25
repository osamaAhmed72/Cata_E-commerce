import React from 'react'
import './WhyUs.css'
import { f1,f2,f3,f4,f5,f6 } from "../../assets/assets";


const WhyUs = () => {
  return (
    <div id="Features" className='section-p1'>
      <div class="fe-box">
            <img src={f1} alt="" />
            <h6>Free Shiping</h6>
        </div>

        <div class="fe-box">
            <img src={f2} alt="" />
            <h6>Online Order</h6>
        </div>

        <div class="fe-box">
            <img src={f3} alt="" />
            <h6>Save Money</h6>
        </div>

        <div class="fe-box">
            <img src={f4} alt="" />
            <h6>Promotions</h6>
        </div>

        <div class="fe-box">
            <img src={f5} alt="" />
            <h6>Happy Sall</h6>
        </div>

        <div class="fe-box">
            <img src={f6} alt="" />
            <h6>F24/7 Support</h6>
        </div>
    </div>
  )
}

export default WhyUs
