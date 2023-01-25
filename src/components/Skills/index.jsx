import React from 'react'

import './Skills.css'

const Skills = ({skillsName, skillsDescription, skillsPoints}) => {
    return (
        <div className='skills'>
            <div className="skillsHeader">
                <h1 className='skillsName'>
                    {skillsName}
                </h1>
                <div className="skillsAvarage">
                    <div className='skillsBar'>
                        <div className='skillsBarProgress' style={{
                                                                    width: `${skillsPoints}0%`
                                }
                            }
                        >
                            
                        </div>
                    </div>
                    <p className='skillsPoints'>
                        {skillsPoints}/10
                    </p>
                </div>
            </div>

            <h2 className='skillsDescription'>
                {skillsDescription}
            </h2>
        </div>
     )
}

export default Skills