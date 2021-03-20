import React, { useState, useEffect } from 'react';
import { useBasket } from "../contexts/BasketContext";
import Link from 'next/link';
import firebaseInstance from '../config/firebase';
import { useRouter } from 'next/router';
import { useAuth } from '../auth';
import Container from '../components/Container';

function Cart() {

    const basket = useBasket();
    const router = useRouter();
    const { user, loading, isAuthenticated } = useAuth();

    //------------------------------------------------------------------s
    //Sjekker om du er logget inn ellers blir man pushet til login siden
    if (loading) {
        return <>Loading...</>
    };
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("");
            return <>Du er ikke logget inn</>
        };
    }, [])
    
    //henter inn fjerne funksjon fra basketContext
    const fjern = (id) => {

        basket.deleteHandler(id);
    };
    
    
    //-------------------------------------------------------
    //Funksjon som pusher data fra bestilling inn i Firebase
    
    function OrderHandler() {

        const collection = firebaseInstance.firestore().collection('order')
        collection
            .add({
                items: [...basket.productLines],
                complete: false,
                Betale: basket.total,
                orderNumber: Math.floor(Math.random() * 100),
            })
            .then((doc) => {
                console.log('Til firebase', doc.id);
                router.push(`confirmed/${doc.id}`)
            })
            .then((doc)=>{
                basket.clearAll();
            })
            .catch((error) => {
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
                {basket.productLines && basket.productLines.map((item) => {
                    return (
                        <>
                            <div key={item.id}>
                                <h2 className="productName">{item.navn}</h2>
                                <h2>{item.pris}kr</h2>
                                <input
                                    type="number"
                                    placeholder="Antall"
                                    min-value={0}
                                ></input>
                                <button className="removeBtn" onClick={() => {
                                    fjern(item.id)
                                }}>Fjern
                            </button>
                            </div>
                        </>
                    )
                })}
                <h2>Totaltsum:{basket.total}kr</h2>
                <Link href="/ConfirmedOrder">
                    <button onClick={() => { OrderHandler() }} >Checkout</button>
                </Link>

            </div>
        </div>
    )
};

export default Cart;
