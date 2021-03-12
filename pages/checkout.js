import React from 'react';
import {useBasket} from "../contexts/BasketContext";


function checkOut() {




    return (
        <>
        <header>
            <h1> Børres Burger</h1> 
            <span className="deler"></span>
            <h1>Bestilling:<span>{basket.total}</span></h1>
            <Profile/>
        </header> 

        </>
    )
    
    
    
    
}



export default checkOut; 