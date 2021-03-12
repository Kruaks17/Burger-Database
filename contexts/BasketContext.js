import React, {createContext, useContext, useEffect, useState} from 'react';


const BasketContext = createContext({

    productLines: [],
    addProductLine: () => {},
    total: 0
})

export const Basket = ({children}) => {

    const [productLines, setProductLines] = useState([]);
    const [total, setTotal] = useState(0);

    const addProductLine = (product) => {
        setProductLines([...productLines, product]);
    };

    const deleteHandler = (id)=>{
        let filter = productLines.filter((item) => item.id !== id);
        setProductLines(filter);
    };
    useEffect (() => {
        const total = productLines.reduce((prev, cur)=>{
            return prev + cur.pris;
            
        }, 0);
        setTotal(total)
    },[productLines])

    



    return (
        <BasketContext.Provider value={{productLines, addProductLine, total, deleteHandler}} >
            {children}
        </BasketContext.Provider>
    );
};
    export const BasketConsumer = BasketContext.Consumer;

    export const useBasket = () => {
        return useContext(BasketContext);
    };
