import React, { createContext, useContext, useEffect, useState } from 'react';


const BasketContext = createContext({

    productLines: [],
    addProductLine: () => { },
    total: 0,
    quantity: 0,

})

export const Basket = ({ children }) => {

    const [productLines, setProductLines] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState();

    //-----------------------------------------------------------
    // Lagrer produkter i Storage
    useEffect(() => {

        let data = localStorage.getItem("productLines");
        let data2 = JSON.parse(data);

        console.log(data, data2);

        if (data !== undefined) {
            setProductLines(data2);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("productLines", JSON.stringify(productLines));
    }, [productLines])

    //-----------------------------------------------------
    // Legger til produkter
    const addProductLine = (product) => {

        setProductLines([...productLines, product]);

        
    };

    //-----------------------------------------------------------------
    // Filtrerer ut produkter fra handlekurven 
    const deleteHandler = (id) => {
        let filter = productLines.filter((item) => item.id !== id);
        setProductLines(filter);
    };

    //---------------------------------------------------------------
    // Viser totalsummen av produkter og  quantity oppdateres 
    useEffect(() => {

        const total = productLines.reduce((prev, cur) => {
            console.log(typeof cur.count);
            if (cur.count) {
                return prev + cur.pris * parseInt(cur.count);
            } else {
                return prev + cur.pris
            }
        }, 0);
        setTotal(total)

    }, [productLines])


    const clearAll = () => {
        setProductLines([]);
    }

    //------------------------------------------------------------
    //Oppdaterer input feltet for å endre antallet av ett produkt
    const updateCount = (id, count) => {

        setProductLines(prev => {
            console.log(id, count);
            const updatedProductLines = prev.map(item => {
                if (id === item.id) {
                    const updatedItem = { ...item, count: count }
                    return updatedItem
                }
                return item;
            })

            return updatedProductLines;

        })

    }



    return (
        <BasketContext.Provider value={{ productLines, addProductLine, total, deleteHandler, clearAll, quantity, updateCount }} >
            {children}
        </BasketContext.Provider>
    );
};
export const BasketConsumer = BasketContext.Consumer;

export const useBasket = () => {
    return useContext(BasketContext);
};
