import React, { useState, useEffect } from 'react';
import firbaseInstance from '../config/firebase';
import Link from 'next/link';
import { useBasket } from '../contexts/BasketContext';
import { useAuth } from '../auth';

const PickUp = () => {

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

    return (
        <>
            <div className="ikke-klar">
                <h1>Ikke Klar</h1>
                {order && order.filter(item => !item.complete)((item) => {
                    if (!item.items) {
                        return null;
                    }
                    return (
                        <section className="order-container">
                            <h2>{item.orderNumber}</h2>
                            {item.items.map((product) => {
                                return (
                                    <section>
                                        <h2>{product.navn}</h2>
                                    </section>
                                )
                            })
                            }

                        </section>
                    )
                })}
            </div>
            <div className="klar">
                <h1>Ikke Klar</h1>
                {order && order.filter(item => item.complete)((item) => {
                    if (!item.items) {
                        return null;
                    }
                    return (
                        <section className="order-container">
                            <h2>Ordrenummer:{item.orderNumber}</h2>
                            {item.items.map((product) => {
                                return (
                                    <h2>{product.navn}</h2>
                                )
                            })
                            }

                        </section>
                    )
                })}
            </div>
        </>
    )

}


export default PickUp;
