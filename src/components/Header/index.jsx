import React from 'react'
import './Header.css'

import IconPerfil from '../IconPerfil'

import wood from "../../images/backgroundWood.jpg"

const Header = () => {
    return ( 
        <div className='container'
        style={{
            backgroundImage: `url(${wood})`,
            backgroundRepeat: `round`,
        }}
        >
            <div className="title">
                Olá, Eu sou Gustavo
            </div>

            <IconPerfil />
        </div>
     )
}
 
export default Header