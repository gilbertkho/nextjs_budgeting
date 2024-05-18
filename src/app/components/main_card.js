import React from 'react';

const MainCard = (props) => {

    return (
        <div className={`w-full bg-white p-4 rounded border-2 border-[#6da108] ${props.className}`}>
           <span className='text-[24px]'>{props.text}</span>
        </div>
    )
}

export default MainCard;