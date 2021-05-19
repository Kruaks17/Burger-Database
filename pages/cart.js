import React from 'react';
import { useBasket } from "../contexts/BasketContext";
import Link from 'next/link';
import firebaseInstance from '../config/firebase';
import { useRouter } from 'next/router';


function Cart() {

    const basket = useBasket();
    const router = useRouter();

    //Henter inn fjerne funksjon fra basketContext
    const fjern = (id) => {
        basket.deleteHandler(id);
    };

    const { updateCount } = basket;
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
                count: 1,
            })
            .then((doc) => {
                console.log('Til firebase', doc.id);
                router.push(`confirmed/${doc.id}`)
            })
            .then(() => {
                basket.clearAll();
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <>
            <title> Børres-Burger / Handlekurv </title>
            <header className="cart-header">
                <h1 className="borre">Børres Burger</h1>
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
                                <img
                                    alt="Bilde av produkter som er lagt til i handelkurv"
                                    src={item.bilde}
                                    style={{ width: "100%" }} />
                                <h2 className="">{item.navn}</h2>
                                <p>{item.beskrivelse}</p>
                                <h2>{item.pris}kr</h2>
                                <input

                                    onChange={(event) => { updateCount(item.id, event.target.value) }}
                                    type="number"
                                    placeholder="1"
                                    min-value={0}
                                >
                                </input>
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

        </>
    )
};

export default Cart;
