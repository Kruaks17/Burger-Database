import React, { useState } from 'react';
import {useBasket} from "../contexts/BasketContext";
import Link from 'next/link';


function Cart() {

    
    const basket = useBasket();
    
    const fjern = (id) => {

        basket.deleteHandler(id);
    };

    return ( 
        <div>
            <header> <Link href="/" ><a className="tilbake">Tilbake til meny</a></Link></header>
            <h1 className="handlekurv">Handlekurv</h1>            
            <div className="cart-container"> 
                    {basket.productLines && basket.productLines.map((item)=>{ 
                    return(
                        <>
                        <div key={item.id}>
                            <h2 className="productName">{item.navn}</h2>
                            <h2>{item.pris}kr</h2>
                            <input type="number" placeholder="antall" className="amount">{item}</input> 
                            <button onClick= {() =>{
                                fjern(item.id)
                            }}>Fjern</button>
                            
                        </div>
                        </>
                    )
                })}
                    <h2>Totaltsum:{basket.total}</h2>
                    <Link href="/checkout"><button>Checkout</button></Link>
                    <footer></footer>
                    
                    
            </div>
        </div>
    )

};

export default Cart;
