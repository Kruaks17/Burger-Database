import React, { useState, useEffect } from 'react';
import firbaseInstance from '../config/firebase';
import Link from 'next/link';
import { useBasket } from '../contexts/BasketContext';
import { useAuth } from '../auth';

const Kitchen = () => {

    const user = useAuth()
    const [order, setOrder] = useState(null);
    const basket = useBasket();
    /*const [ready, setReady]= useSate(null); */

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
                    setOrder(order);
                    console.log(order);
                })
        } catch (error) {
            console.log(error, 'error fra kjøkken');
        }

    }, [])

    const completeHandler = (item) => {
        firbaseInstance.firestore().collection('order').doc(item.id).update({
            complete: true,
        })
    };
    return (
        <>
            <h1 className="orderh1">Bestillinger</h1>
            {order && order.map((item) => {
                if (!item.items) {
                    return null;
                }
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
                        <p>{item.orderNumber}</p>
                        <button onClick={() => {
                            { completeHandler(item) }
                        }}>Fullført</button>
                        <button>Hentet</button>
                    </section>
                )
            })}
        </>
    )
}

export default Kitchen;