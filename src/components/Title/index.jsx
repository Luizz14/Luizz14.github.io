import React from 'react'
import './Title.css'

const Title = ({Title, Id}) => {
    return ( 
        <div className='containerTitle' id={Id}>
            <h1>
                {Title}
            </h1>
        </div>
     )
}
 
export default Title