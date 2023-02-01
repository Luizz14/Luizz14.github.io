import React from 'react'

import './Portfolio.css'

const Portfolio = ({portfolioName, portfolioLink, portfolioDescription, portfolioTec, portfolioDevelopment}) => {
    return ( 
        <div className='portfolio'>
            <div className="portfolioDevelopment"
                style={{
                    display: portfolioDevelopment ? 'block' : 'none'
                }}
            >
                <p>
                    Em desenvolvimento
                </p>
            </div>
            <h1>
                {portfolioName}
            </h1>
            <div className="portfolioInfo">
                <a href={portfolioLink}
                    style={{
                        display: portfolioDevelopment ? 'none' : 'block'
                    }}
                >
                    Repositório
                </a>
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