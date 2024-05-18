import React from 'react';

const CategoryCard = (props) => {

    const dateNow = new Date();
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className={`w-full bg-white p-4 rounded border-2 border-[#6da108] ${props.className}`}>
            Date: {`${dateNow.getDate()} ${monthName[dateNow.getMonth()]} ${dateNow.getFullYear()}`}
            <table className='table-auto border-collapse w-full'>
                <thead>
                    <tr>
                        <th className='border p-4' style={{width:'60%'}}>Category</th>
                        <th className='border p-4'>Spendings</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default CategoryCard;