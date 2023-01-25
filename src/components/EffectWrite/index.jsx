import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import './EffectWrite.css'

const EffectWrite = (props) => {
    const [text, setText] = useState('')
    const [seconds, setSeconds] = useState()

    const write = (text, i = 0, segundos) => {
        setSeconds(segundos)
        if (i < text.length) {
            setText(text.slice(0, i + 1))
            
            setTimeout(() => write(text, i + 1), 10)
        }
    }

    useEffect(() => {
        setTimeout(() => write(props.text))
    }, [])

    return ( 
        <p>
            {text}
        </p>
     )
}
 
export default EffectWrite