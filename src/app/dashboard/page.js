'use client'
import React from 'react';
import MainCard from '../components/main_card';
import CategoryCard from '../components/category_card';
import Button from '../components/button';

const Dashboard = () => {


    return (
        <div className='p-2'>
            <MainCard text={"Your amount spent this week: "} className='mb-2'/>
            <Button 
                bg="#39bdf8"
                color="white"
                text="+ Add Category"
                className="rounded-full"
                onClick = {() => checkAction()}
            />
            <button className='bg-[#39bdf8] text-white rounded-full px-3 py-2 min-w-[100px]'>+ Add Category</button>
            <CategoryCard className='my-2'/>
        </div>
    )
}

export default Dashboard;
