import React from 'react'
import './products.css'
import { f1p } from '../../assets/assets'
import { f2p } from '../../assets/assets'
import { f3p } from '../../assets/assets'
import { f4p } from '../../assets/assets'
import { f5p } from '../../assets/assets'
import { f6p } from '../../assets/assets'
import { f7p } from '../../assets/assets'
import { f8p } from '../../assets/assets'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";










const Products = ({setCart}) => {
    return (
        <div className='section-p1 positionIn'>
            <div className='pro_container'>
                <div class="pro">
                    <img src={f1p} alt=""/>
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
                    <FaShoppingCart className='cart' />
                </div>
                <div class="pro">
                    <img src={f2p} alt=""/>
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
                    <img src={f3p} alt=""/>
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
                    <img src={f4p} alt=""/>
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
                    <img src={f5p} alt=""/>
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
                    <img src={f6p} alt=""/>
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
                    <img src={f7p} alt=""/>
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
                    <img src={f8p} alt=""/>
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

export default Products
