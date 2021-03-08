import React from 'react';


export default function Cart ({cart,setCart}){

    const getTotalSum = ()=>{
        return cart.reduce(
            (sum, {cost, quantity}) => sum + cost * quantity,
            0
        );
    }

const clearCart = () => {
    setCart([]);
};

const setQuantity = (product, amount) => {

    const newCart = [...cart];
    newCart.find(
        (item) => item.navn === product.id
    ).quantity = amount;
    setCart(newCart);
};

const removeFromCart = (productsToRemove) => {
    setCart (
        cart.filter((products)=> products !== productsToRemove)
    );
};

return (
    <>

    </>


)
};