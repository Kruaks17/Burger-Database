import React from 'react';
import { useBasket } from '../contexts/BasketContext';
import Link from 'next/link';


const ConfirmedOrder = ()=> {

    const basket = useBasket();

    return (
        <div >
            <h1>Bestillingen er mottat</h1>
            <p>Takk for betillingen! Du vil motta en bekreftelse på din e-post.</p>
            <div className="orderContainer">
                <div>
                    <h2>Din bestilling</h2>
                    {basket.productLines.map((item)=>{
                        return(
                            <div key={item.id}> 
                                <h2>{item.navn}</h2>
                                <p>{item.pris}kr</p>
                            </div>                            
                        )
                    })}
                </div>
                <p>Totaltsum:{basket.total}kr</p>
                
            </div>
        </div>
    )
}
export default ConfirmedOrder;