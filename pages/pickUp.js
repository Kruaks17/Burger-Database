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
                collection('order').onSnapshot((querySnapshot) => {
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
            <h1 className="orderh1">Bestillinger</h1>
            <div className="ikke-klar">
                <h1>Ikke Klar</h1>
                {order && order.filter(item => !item.complete).map((item) => {
                    if (!item.items) {
                        return null;
                    }
                    return (
                        <section>
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
            <div className="klar">
                <h1>Klar</h1>
                {order && order.filter(item => item.complete).map((item) => {
                    if (!item.items) {
                        return null;
                    }
                    return (
                        <section >
                            <h2>Ordrenummer:{item.orderNumber}</h2>
                            {item.items.map((product) => {
                                return (
                                    <>
                                    <h2>{product.navn}</h2>
                                    </>
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
