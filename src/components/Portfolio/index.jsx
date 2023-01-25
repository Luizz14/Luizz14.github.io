import React from 'react'

import './Portfolio.css'

const Portfolio = ({portfolioName, portfolioLink, portfolioDescription, portfolioTec}) => {
    return ( 
        <div className='portfolio'>
            <div className="portfolioDevelopment" style={{
                // display: {'none'}
            }}>
                    <p>
                        Em desenvolvimento
                    </p>
            </div>
            <h1>
                {portfolioName}
            </h1>
            <div className="portfolioInfo">
                <a href={portfolioLink}>Link</a>
                <h2>
                    {portfolioDescription}
                </h2>
            </div>
            <div className="portfolioTec">
                <h1>
                    Tecnologias usadas
                </h1>
            <div className="portfolioFrameworks">
                   {portfolioTec}
                </div>
            </div>
        </div>
     )
}
 
export default Portfolio