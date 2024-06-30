'use client'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import UrunanParticipants from '../components/urunan_participants';
import Discounted from '../components/discounted';
import ExtraFee from '../components/extra_fee';
import Participants from '../components/participants';

const Urunan  = () => {

    const [participants, setParticipants] = useState(['']);
    const [spent, setSpent] = useState([{
        name: '',
        spent: 0,
    }]);
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
    const [payResult, setPayResult] = useState([]);

    const addParticipant = () => {
        let arr = [...participants];
        arr.push('');
        setParticipants(arr);
    }

    const addSpendings = () => {
        let arr = [...spent];
        let newArr =     {
            name: participants[0],
            fee: 0
        }
        arr.push(newArr);
        setSpent(arr);
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
            feeTotal += parseInt(isNaN(exf.fee) ? 0 : exf.fee);
        });

        spent.forEach((par, idx) => {
            subTotal += parseInt(isNaN(par.spent) ? 0 : par.spent);
        });

        discounted.forEach((dis,idx) => {
            total_discount += parseInt(isNaN(dis.price) ? 0 : dis.price);
        });

        console.log('feetotal:', feeTotal);
        totalAfterDiscount = subTotal - total_discount + feeTotal;

        let allPriceAfterDiscount = [];

        setTotal((prevState) => { 
            return {...prevState, 
                subTotal: subTotal, 
                totalAfterDiscount: totalAfterDiscount
            }
        });

        spent.forEach((par, idx) => {
            let percentage = par.spent <= 0 ? 0 : par.spent / subTotal * 100;
            
            let feePerParticipants = parseInt(feeTotal / participants.length);
            
            let discountPerParticipants = parseInt(total_discount * percentage / 100);
            
            let priceAfterDiscountAndFee = parseInt(par.spent - discountPerParticipants + feePerParticipants);
            
            allPriceAfterDiscount.push({
                name: par.name,
                pay: parseInt(priceAfterDiscountAndFee),
            })
        })

        setPayResult(allPriceAfterDiscount);

    },[participants, discounted, extraFee, spent])

    const inputValue = (e, idx, inputType) => {
        let participant = [...participants];
        let spents = [...spent];
        let discount = [...discounted];
        let fee = [...extraFee];

        if(inputType == 'input'){
            participant[idx] = e.target.value;
        }
        if(inputType == 'option'){
            spents[idx].name = e.target.value;
        }
        if(inputType == 'number'){
            spents[idx].spent = e.target.value;
        }
        if(inputType == 'number_discount'){
            discount[idx].price = e.target.value;
        }
        if(inputType == 'number_fee'){
            fee[idx].fee = e.target.value;
        }

        setParticipants(participant);
        setDiscounted(discount);
        setSpent(spents);
        setExtraFee(fee);
    }

    useEffect(() => {
        console.log("payRES", payResult);
    },[payResult])

    return (
       <div className={`flex justify-center`}>
            <div className={`${styles.main_page} bg-[#cfd0d0] w-full p-[8px]`}>
                <p>Urunan</p>
                <small>urunan participants</small>
                <div className={`flex flex-col gap-[8px]`}>
                    {
                        participants.map((par, idx) => {
                            return (
                              <Participants key={idx} value={par} onChangeInput={(e) => inputValue(e, idx, 'input')}/>
                            );
                        })
                    }
                    <button onClick={addParticipant} className={``}>+ Add Participant</button>
                </div>
                <p>Spending</p>
                <small>participants spending</small>
                <div className={`flex flex-col gap-[8px]`}>
                    {
                        spent.map((sp, idx) => {
                            return (
                              <UrunanParticipants key={idx} spent={sp.spent} name={sp.name}
                              participants = {participants}
                              onChangeInput={(e) => inputValue(e, idx, 'option')} 
                              onChangeNumber={(e) => inputValue(e, idx, 'number')}/>
                            );
                        })
                    }
                    <button onClick={addSpendings} className={``}>+ Add Spendings</button>
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
                {payResult.length > 0 ?
                    <table className="w-full border-[1px] border-[black]">
                        <thead>
                            <tr>
                                <th style={{width: "50%"}}>Name</th>
                                <th style={{width: "50%"}}>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            payResult.map((all,idx) => {
                                return(
                                    <tr key={idx}>
                                        <td>{all.name}</td>
                                        <td>{isNaN(all.pay) ? 0 : all.pay}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    : 
                    null
                }
            </div>
       </div> 
    )
}

export default Urunan;