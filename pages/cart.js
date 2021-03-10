import React, { useState } from 'react';
import {useBasket} from "../contexts/BasketContext";
import Link from 'next/link';


function Cart() {

    const [item, setItem] = useState([]);
    const basket = useBasket();

    

    return (

            
        <div>
            <h1 className="handlekurv">Handlekurv</h1>
            <Link href="/" className="tilbake"><h1>Tilbake</h1></Link>
            <div className="cart-container">
                
                <h2>Bestilling</h2>
                    {basket.productLines && basket.productLines.map((item)=>{
                        
                    return(
                        <>
                            <h2 className="productName">{item.navn}</h2>
                            <h2>{item.pris}kr</h2>
                            <button >Fjern</button>
                        </>
                    )
                })}
                    <h2>Totalt:{basket.total}</h2>
                    
                    
            </div>
        </div>
    )

};

export default Cart;
