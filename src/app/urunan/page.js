'use client'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import UrunanParticipants from '../components/urunan_participants';
import Discounted from '../components/discounted';
import ExtraFee from '../components/extra_fee';

const Urunan  = () => {

    const [participants, setParticipants] = useState([
        {
            name: '',
            spent: 0
        }
    ]);

    const [discounted, setDiscounted] = useState([
        {
            price: 0,
        }
    ]);

    const [extraFee, setExtraFee] = useState([
        {
            name: '',
            fee: 0
        }
    ]);

    const [total, setTotal] = useState({
        subTotal: 0,
        totalAfterDiscount: 0,
    });    



    const addParticipant = () => {
        let arr = [...participants];
        let newArr =     {
            name: '',
            spent: 0
        }
        arr.push(newArr);
        setParticipants(arr);
    }

    const addDiscountedPrice = () => {
        let arr = [...discounted];
        let newArr =     {
            price: 0
        }
        arr.push(newArr);
        setDiscounted(arr);
    }

    const addExtraFee = () => {
        let arr = [...extraFee];
        let newArr =     {
            name: '',
            fee: 0
        }
        arr.push(newArr);
        setExtraFee(arr);
    }

    useEffect(() => {
        let feeTotal = 0;
        let subTotal = 0;
        let total_discount = 0;
        let totalAfterDiscount = 0;

        console.log('participant', participants);
        console.log('fee', extraFee);

        extraFee.forEach((exf, idx) => {
            feeTotal += parseInt(exf.fee);
        });

        participants.forEach((par, idx) => {
            subTotal += parseInt(par.spent);
        });

        discounted.forEach((dis,idx) => {
            total_discount += parseInt(dis.price);
        });

        console.log('feetotal:', feeTotal);
        totalAfterDiscount = subTotal - total_discount + feeTotal;

        let allPriceAfterDiscount = [];

        setTotal((prevState) => 
           {
            return {...prevState, subTotal: subTotal, totalAfterDiscount: totalAfterDiscount }
           }
        );

        participants.forEach((par, idx) => {
            let percentage = par.spent / subTotal * 100 ;
            let feePerParticipants = feeTotal / participants.length;
            let discountPerParticipants = total_discount * percentage / 100;
            let priceAfterDiscountAndFee = par.spent - discountPerParticipants + feePerParticipants;
            allPriceAfterDiscount.push({
                name: par.name,
                pay: priceAfterDiscountAndFee,
            })
        })

        console.log(allPriceAfterDiscount)

    },[participants, discounted, extraFee])

    const inputValue = (e, idx, inputType) => {
        let participant = [...participants];
        let discount = [...discounted];
        let fee = [...extraFee];
        if(inputType == 'input'){
            participant[idx].name = e.target.value;
        }
        if(inputType == 'number'){
            participant[idx].spent = e.target.value;
        }
        if(inputType == 'number_discount'){
            discount[idx].price = e.target.value;
        }
        if(inputType == 'number_fee'){
            fee[idx].fee = e.target.value;
        }

        setParticipants(participant);
        setDiscounted(discount);
        setExtraFee(fee);
    }

    return (
       <div className={`flex justify-center`}>
            <div className={`${styles.main_page} bg-[#cfd0d0] w-full p-[8px]`}>
                <p>Urunan</p>
                <small>urunan participants</small>
                <div className={`flex flex-col gap-[8px]`}>
                    {
                        participants.map((par, idx) => {
                            return (
                                <UrunanParticipants key={idx} name={par.name} spent={par.spent} 
                                onChangeInput={(e) => inputValue(e, idx, 'input')}
                                onChangeNumber={(e) => inputValue(e, idx, 'number')}/>
                            );
                        })
                    }
                    <button onClick={addParticipant} className={``}>+ Add Participant</button>
                </div>
                <p>Discount</p>
                <small>discounted price</small>
                <div className={`flex flex-col gap-[8px]`}>
                    {
                        discounted.map((dis, idx) => {
                            return (
                                <Discounted key={idx} price={dis.price}
                                onChangeNumber={(e) => inputValue(e, idx, 'number_discount')}/>
                            );
                        })
                    }
                    <button onClick={addDiscountedPrice} className={``}>+ Add Discounted Price</button>
                </div>
                <p>Fee</p>
                <small>extra fee</small>
                <div className={`flex flex-col gap-[8px]`}>
                    {
                        extraFee.map((dis, idx) => {
                            return (
                                <ExtraFee key={idx} fee={dis.fee}
                                onChangeNumber={(e) => inputValue(e, idx, 'number_fee')}/>
                            );
                        })
                    }
                    <button onClick={addExtraFee} className={``}>+ Add Fee</button>
                </div>
                <p>SubTotal: {total.subTotal}</p>
                <p>Total After Discount: {total.totalAfterDiscount}</p>
            </div>
       </div> 
    )
}

export default Urunan;