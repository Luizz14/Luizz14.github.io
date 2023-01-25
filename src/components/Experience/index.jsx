import React from 'react'
import EffectWrite from '../EffectWrite'
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
                <EffectWrite text={experienceDescription} seconds={1000}/>
            </h2>
        </div>
     )
}
 
export default Experience