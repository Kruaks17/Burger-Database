import React, { useState, useEffect } from 'react';
import firbaseInstance from '../config/firebase';
import { useBasket } from '../contexts/BasketContext';
import { useAuth } from '../auth';
import Head from 'next/head';


const Kitchen = () => {

    const user = useAuth();
    const [order, setOrder] = useState(null);
    const basket = useBasket();
    const [ready, setReady] = useState(null);

    useEffect(() => {
        try {
            const OrderCollection = firbaseInstance.firestore().
                collection('order').where('complete', '==', false).onSnapshot((querySnapshot) => {
                    let order = [];
                    querySnapshot.forEach((doc) => {
                        order.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    setOrder(order);
                    console.log(order);
                })
        } catch (error) {
            console.log(error, 'error fra kjøkken');
        }

    }, [])
    useEffect(() => {
        try {
            const OrderCollection = firbaseInstance.firestore().
                collection('order').where('complete', '==', true).onSnapshot((querySnapshot) => {
                    let order = [];
                    querySnapshot.forEach((doc) => {
                        order.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    setReady(order);
                    console.log(order);
                })
        } catch (error) {
            console.log(error, 'error fra kjøkken');
        }

    }, [])



    const completeHandler = (item) => {
        firbaseInstance.firestore().collection('order').doc(item.id).update({
            complete: true
        })
    };
    const deliveredHandler = (item) => {

        firbaseInstance.firestore().collection('order').doc(item.id).delete();
        firbaseInstance.firestore().collection('levert').doc(item.id).set({ ...item });

    };


    return (
        <>
            <Head>
            <title> Børres-Burger / Kjøkken </title>
            </Head>
            <header className="cart-header">
                <h1 className="borre">Børres Burger</h1>
            </header>
            <h1 className="orderh1">Bestillinger</h1>
            {order && order.map((item) => {

                return (
                    <section className="order-container">
                        {item.items.map((product) => {
                            return (
                                <section>

                                    <h2>{product.navn}</h2>
                                </section>
                            )
                        })
                        }
                        <h2>Ordrenummer:{item.orderNumber}</h2>
                        <button onClick={() => {
                            { completeHandler(item) }
                        }}>Fullført</button>
                    </section>
                )
            })}
            <section className="order-container">
                <h1>Klar for henting</h1>
                {ready && ready.map((item) => {
                    return (
                        <section>
                            <h2>Ordrenummer:{item.orderNumber}</h2>
                            <button
                                onClick={() => { deliveredHandler(item) }}
                            >Hentet</button>
                        </section>
                    )
                })}
            </section>

        </>

    )
}

export default Kitchen;