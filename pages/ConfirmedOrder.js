import React from 'react';
import { useBasket } from '../contexts/BasketContext';
import Link from 'next/link';

const ConfirmedOrder = () => {

    const basket = useBasket();
    return (
        <div>
            <h1 className="mottat">Bestillingen er mottat</h1>
            <p className="bedskjed">Takk for betillingen! Du vil motta en bekreftelse på din e-post.</p>
            <div className="order-container">
                <div>
                    <h2>Din bestilling</h2>
                    {basket.productLines.map((item) => {
                        return (
                            <div key={item.id}>
                                <h2>{item.navn}</h2>
                                <p>{item.pris}kr</p>
                                <p>Ordrenummer:{item.orderNumber}kr</p>
                            </div>
                        )
                    })}
                    <h2>Totaltsum:{basket.total}kr</h2>
                    <Link href="/pickUp">
                        <a>Klikk for å se om bestilling er ferdig!</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ConfirmedOrder;