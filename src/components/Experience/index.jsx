import React from 'react'

import './Experience.css'

const Experience = ({experienceName, experienceLocation, experienceDate, experienceDescription}) => {
    return ( 
        <div className='experience'>
            <h1 className='experienceName'>
                {experienceName}
            </h1>
            <div className="experienceInformation">
                <p className='experienceLocation'>
                    {experienceLocation}
                </p>
                <p className='experienceDate'>
                    {experienceDate}
                </p>
            </div>
            <h2 className='experienceDescription'>
                {experienceDescription}
            </h2>
        </div>
     )
}
 
export default Experience