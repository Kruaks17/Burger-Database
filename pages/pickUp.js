import React, { useState, useEffect } from 'react';
import firbaseInstance from '../config/firebase';
import Link from 'next/link';
import Head from 'next/head';

const PickUp = () => {

    const [order, setOrder] = useState(null);

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
            <Head>
            <title> Børres-Burger / Hente </title>
            </Head>
            <header className="cart-header">
                <h1 className="borre">Børres Burger</h1>
                <Link href="/" >
                    <a className="tilbake">
                        Tilbake til meny</a>
                </Link>
            </header>
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