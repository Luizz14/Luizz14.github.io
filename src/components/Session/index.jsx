import React from 'react'
import TitleSession from '../TitleSession'

import './Session.css'

const Session = () => {
    return ( 
        <div className='session'>
            <TitleSession Name={'Sobre'} />
            <TitleSession Name={'Experiências'} />
            <TitleSession Name={'Portfolio'} />
        </div>
     )
}
 
export default Session