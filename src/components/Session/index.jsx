import React from 'react'

import './Session.css'

const Session = ({NameSession}) => {
    return ( 
        <div className='session'>
            <a href={`#`}>{NameSession}</a>
        </div>
     )
}
 
export default Session