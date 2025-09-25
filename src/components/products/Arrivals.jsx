import React from 'react'
import './products.css'
import { n1 } from '../../assets/assets'
import { n2 } from '../../assets/assets'
import { n3 } from '../../assets/assets'
import { n4 } from '../../assets/assets'
import { n5 } from '../../assets/assets'
import { n6 } from '../../assets/assets'
import { n7 } from '../../assets/assets'
import { n8 } from '../../assets/assets'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Arrivals = ({setCart}) => {
  return (
    <div className='section-p1 positionIn'>
                <div className='pro_container'>
                    <div class="pro">
                        <img src={n1} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                    <div class="pro">
                        <img src={n2} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                    <div class="pro">
                        <img src={n3} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                    <div class="pro">
                        <img src={n4} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                    <div class="pro">
                        <img src={n5} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                    <div class="pro">
                        <img src={n6} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                    <div class="pro">
                        <img src={n7} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                    <div class="pro">
                        <img src={n8} alt=""/>
                        <div class="descreption">
                            <span>adidas</span>
                            <h5>Carton Astrount T-Shirts</h5>
                            <div class="star">
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                                <FaStar className='starIcon'/>
                            </div>
                            <h4>$90</h4>
                        </div>
                        <FaShoppingCart onClick={() => setCart(prev => prev + 1)} className='cart' />
                    </div>
                </div>
            </div>
  )
}

export default Arrivals
