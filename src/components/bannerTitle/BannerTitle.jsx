import React from 'react'
import './BannerTitle.css'

const BannerTitle = ({text1,text2}) => {
  return (
    <div>
      <div className='title_banner'>
            <h2>{text1}</h2>
            <p>{text2}</p>
        </div>
    </div>
  )
}

export default BannerTitle
