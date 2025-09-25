import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import WhyUs from '../../components/whyUs/WhyUs'
import Title from '../../components/Title/Title'
import Products from '../../components/products/Products'
import Arrivals from '../../components/products/Arrivals'







const Home = ({cart, setCart}) => {
  return (
    <div>
      <div className="hero">
        <h4>Trade-In-Offer</h4>
        <h2>Super Value Deals</h2>
        <h1>On All Products</h1>
        <p>Save More With Coupons & Up To 70% Off!</p>
        <button>
          {" "}
          <Link to={"/shop"}>Shop Now</Link>{" "}
        </button>
      </div>
      <WhyUs />
      <Title
        text1={"Featured Products"}
        text2={"Summer Collection New Modern Design"}
      />
      <Products cart={cart} setCart={setCart} />
      <div className="banner section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up To <span> 70% Off</span> - All T-Shirts & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </div>
      <Title
        text1={"New Arrivals"}
        text2={"Summer Collection New Modern Design"}
      />
      <Arrivals cart={cart} setCart={setCart}/>

      <div className="section-p1 sm_banner">
        <div className="bannar_box">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The Best Classic Dress Is ONe Sale At Care</span>
          <button className="white">Learn More</button>
        </div>

        <div className="bannar_box bannar_box2">
          <h4>Spring/Summer</h4>
          <h2>Upcoming Season</h2>
          <span>The Best Classic Drees Is ONe Sale At Care</span>
          <button className="white">Collection</button>
        </div>
      </div>

      <section id="bannar3">
          <div className="bannar_box">
              <h2>SEASONAL SALE</h2>
              <h3>Winter Collection -50% OFF</h3>
          </div>
          
          <div className="bannar_box bannnarr_1">
              <h2>NEW FOOTWEAR COLLECTION </h2>
              <h3>Spring / Summer 2022</h3>
          </div>

          <div className="bannar_box bannnarr_2">
              <h2>T-SHIRTS</h2>
              <h3> New Trendly Prints</h3>
          </div>
      </section>
    </div>
  );
}

export default Home
