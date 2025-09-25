import React from 'react'
import './Shop.css'
import BannerTitle from '../../components/bannerTitle/BannerTitle'
import Arrivals from '../../components/products/Arrivals'
import Products from '../../components/products/Products'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Shop = ({cart, setCart}) => {
  return (
    <div>
      <div className="titleHeader">
        <BannerTitle
        text1={'#StayHome'}
        text2={'Save More With Coupons & Up To 70% Off!'}
        />
      </div>
      <Arrivals cart={cart} setCart={setCart}/>
      <Products cart={cart} setCart={setCart}/>
      <section id="PaginationShop" class="section-p1">
        <Link>1</Link>
        <Link >2</Link>
        <Link ><FaArrowRight /></Link>
      </section>
    </div>
  )
}

export default Shop
