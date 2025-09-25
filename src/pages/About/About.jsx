import React from 'react'
import './About.css'
import BannerTitle from '../../components/bannerTitle/BannerTitle'
import WhyUs from '../../components/whyUs/WhyUs'
import { a6, video } from '../../assets/assets'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <div className="about_header">
        <BannerTitle
        text1={'#KnowUs'}
        text2={'Read All Case Studies About Our Products!'}
        />
      </div>
      <section id="about_head" className="section-p1 ">
        <img src={a6} alt="" />
        <div>
          <h2>Who Are You ?</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
        </p>
        <abbr title="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
        </abbr>
        <br/>
        <br/>
        <marquee bgcolor="aqua" loop="-1" scrollamount="5" width="100%">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere reprehenderit, impedit molestiae consequuntur nam quae rerum dignissimos quis non exercitationem, itaque distinctio eaque voluptates aliquid soluta perspiciatis maiores rem!
        </marquee>
        </div>
      </section>

      <section id="about_app"  className="section-p1 ">
        <h1>Download Our <Link>App</Link> </h1>
        <div className="video" >
          <video  controls autoPlay muted loop >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
      
      <WhyUs/>
    </div>
  )
}

export default About
