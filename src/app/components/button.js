'use client'
import React from 'react';

const Button = (props) => {

    return (
        <button onClick={props.onClick} className={`bg-[${props.bg}] text-[${props.color}] px-3 py-2 min-w-[100px] ${props.className}`}>
            {props.text}
        </button>
    )
}

export default Button;