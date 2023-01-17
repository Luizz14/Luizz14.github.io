import React from 'react'

import './TitleSession.css'

const TitleSession = ({Name}) => {
    return ( 
        <div className='titles'>
            <a href={Name}>{Name}</a>
        </div>
     )
}

export default TitleSession