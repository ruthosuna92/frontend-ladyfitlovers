import React from 'react'
import './buttonSecondary.css'

const ButtonSecondary = ({ onClick, title, disabled, type }) => {
    return (
        <button className='buttonSecondary' type={type} onClick={() => onClick()} disabled={disabled}> {title}</button>
    )
}

export default ButtonSecondary