import React, { useState } from 'react';
import {useBasket} from "../contexts/BasketContext";
import Link from 'next/link';


function Cart() {

    const [productLines, setProductLines] = useState([]);
    const basket = useBasket();

    const deleteHandler = (id)=>{
        let filter = productLines.filter((item) => item.id !== id);

        setProductLines(filter);
    };
    return ( 
        <div>
            <header> <Link href="/" ><a className="tilbake">Tilbake til meny</a></Link></header>
            <h1 className="handlekurv">Handlekurv</h1>
            
            <div className="cart-container"> 
                <h2>Bestilling</h2>
                    {basket.productLines && basket.productLines.map((item)=>{ 
                    return(
                        <>
                            <h2 className="productName">{item.navn}</h2>
                            <h2>{item.pris}kr</h2>
                            <input type="number" placeholder="antall" className="amount"/> 
                            <button onClick= {() =>{
                                deleteHandler(item.id)
                            }}>Fjern</button>
                        </>
                    )
                })}
                    <h2>Totaltsum:{basket.total}</h2>
                    <button>Checkout</button>
                    <footer></footer>
                    
                    
            </div>
        </div>
    )

};

export default Cart;
