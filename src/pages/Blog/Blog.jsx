import React, { useState } from 'react'
import './Blog.css'
import BannerTitle from '../../components/bannerTitle/BannerTitle'
import {b1, b2, b3, b4, b5, b6, b7, b8} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {


  const [pageOne, setPageOne] = useState(true)


  return (
    <div>
      <div className="blog_header">
        <BannerTitle
        text1={'#ReadMore'}
        text2={'Read All Case Studies About Our Products!'}
        />
      </div>

      <section id='blog' className={`${pageOne? '':'hide'}`} >
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b1} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b2} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b3} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b4} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b5} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b6} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b7} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b8} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
      </section>
      <section id='blog' className={`${pageOne?'hide':''}`}>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b4} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b5} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b6} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        <div className="blog-box">
            <div className="blog-imag">
              <img src={b7} alt="" />
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link >CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
      </section>

    <section id="Pagination" class="section-p1">
      <Link onClick={() => setPageOne(true)}>1</Link>
      <Link onClick={() => setPageOne(false)}>2</Link>
      <Link onClick={() => setPageOne(false)}><FaArrowRight /></Link>
    </section>
        
        
    </div>
  )
}

export default Blog
