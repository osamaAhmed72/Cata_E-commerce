import React from 'react'
import './Title.css'



const Title = ({text1,text2}) => {
    return (
        <div className='title'>
            <h2>{text1}</h2>
            <p>{text2}</p>
        </div>
    )
}

export default Title
