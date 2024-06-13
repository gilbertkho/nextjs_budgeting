'use client'
import React from 'react';
import MainCard from '../components/main_card';
import CategoryCard from '../components/category_card';
import Button from '../components/button';

const Dashboard = () => {
    const checkAction = () => {
        console.log('MASUK');
    }

    return (
        <div className='p-2'>
            <MainCard text={"Your amount spent this week: "} className='mb-2'/>
            <Button 
                bg="#39bdf8"
                color="white"
                text="Input Spendings"
                className="rounded-full"
                onClick = {() => checkAction()}
            />
            <Button 
                bg="#39bdf8"
                color="white"
                text="+ Add Budget Category"
                className="rounded-full ms-2"
                onClick = {() => checkAction()}
            />
            <CategoryCard className='my-2'/>
        </div>
    )
}

export default Dashboard;
