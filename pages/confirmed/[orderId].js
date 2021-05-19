import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import firebaseInstance from '../../config/firebase';
import Link from 'next/link';

const Confirmed = () => {
    const router = useRouter();

    const [order, setOrder] = useState(null);
    console.log(router.query.orderId)

    useEffect(() => {

        const orderRef = firebaseInstance.firestore().collection('order').doc(router.query.orderId);

        orderRef.get().then((doc) => {
            if (doc.exists) {
                setOrder({
                    id: doc.id,
                    ...doc.data()
                })
                console.log("Ordernumber:", doc.data().orderNumber);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }, [])

    return (
        <>
            <title>Børres-Bruger / Kvittering</title>
            <header className="cart-header">
                <h1 className="borre">Børres Burger</h1>
                <Link href="/" >
                    <a className="tilbake">
                        Tilbake til meny</a>
                </Link>
            </header>
            <h1 className="orderh1">Kvittering</h1>
            <div className="cart-container">
                <h2>Ordrenummer:{order && order.orderNumber}</h2>
                {order && order.items.map((product) => {
                    return (
                        <>
                            <section>
                                <h2>{product.navn}</h2>
                                <p>{product.beskrivelse}</p>
                            </section>
                        </>
                    )
                })
                }
                <Link href="/pickUp">
                    <a>Trykk her for å se om bestilling er ferdig</a>
                </Link>
            </div>



        </>
    )
};
export async function getServerSideProps(ctx) {
    console.log(ctx.query.orderId);

    return { props: {} }

};

export default Confirmed;