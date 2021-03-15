import React, { useState } from 'react';
import {useBasket} from "../contexts/BasketContext";
import Link from 'next/link';
import firebaseInstance from '../config/firebase';
import { useRouter } from 'next/router';



function Cart() {

    const basket = useBasket();
    const router = useRouter();

    const fjern = (id) => {

        basket.deleteHandler(id);
    };  
    
    function OrderHandler(){

        const collection = firebaseInstance.firestore().collection('order')
        collection
        .doc()
        .set({
            items:[...basket.productLines],
            complete: false, 
            Betale: basket.total,
            
        })
        .then(()=>{
            console.log('Til firebase');
            router.push('')
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return ( 
        <div>
            <header className=""> 
            <Link href="/" >
            <a className="tilbake">
            Tilbake til meny</a>
            </Link>
            </header>
            <h1 className="handlekurv">Handlekurv</h1>            
            <div className="cart-container"> 
                    {basket.productLines && basket.productLines.map((item)=>{ 
                    return(
                        <>
                        <div key={item.id}>
                            <h2 className="productName">{item.navn}</h2>
                            <h2>{item.pris}kr</h2>
                            <input 
                            type="number"
                            placeholder="Antall"
                            min-value={0}
                            ></input>
                             <button className="removeBtn" onClick= {() =>{
                                fjern(item.id)
                            }}>Fjern</button>
                        </div>
                        
                        </>
                    )
                })}
                    <h2>Totaltsum:{basket.total}kr</h2>
                    <Link href="/ConfirmedOrder"><button onClick={()=>{OrderHandler()}}>Checkout</button></Link>
                    <footer></footer>
            </div>         
        </div>        
    )
};

export default Cart;
