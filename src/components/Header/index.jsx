import React from 'react'
import './Header.css'
import { useEffect } from 'react'
import { useState } from 'react'
import EffectWrite from '../EffectWrite'
import IconPerfil from '../IconPerfil'

import wood from "../../images/backgroundWood.jpg"

const Header = () => {

    const EffectWriteHeader = (props) => {
        const [text, setText] = useState('')
    
        const write = (text, i = 0) => {
            if (i < text.length) {
                setText(text.slice(0, i + 1))
                
                setTimeout(() => write(text, i + 1), 100)
            }
        }
    
        useEffect(() => {
            setTimeout(() => write(props.text))
        }, [])

        return ( 
            <div className='title'>
                {text}
            </div>
         )
    }

    return ( 
        <div className='container'
        style={{
            backgroundImage: `url(${wood})`,
            backgroundRepeat: `round`,
        }}
        >
            <div>
                <EffectWriteHeader  text='Olá, Eu sou Gustavo' />
            </div>
            
            <IconPerfil />
        </div>
     )
}
 
export default Header