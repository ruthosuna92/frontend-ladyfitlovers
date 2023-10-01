import React from 'react'
import './buttonTertiary.css'

const ButtonTertiary = ({ onClick, title, disabled, type }) => {
    return (
        <button className='buttonTertiary' type={type} onClick={() => onClick()} disabled={disabled}> {title}</button>
    )
}

export default ButtonTertiary