import React from 'react';
import firbaseInstance from '../config/firebase';

const Kitchen = () => {

    const [currOrder, setCurrOrder] = useState(null);
    
    const getOrder  = (OrderCollection) =>{
        OrderCollection.onSnapShot((querySnapShot)=>{
            const items = []
            querySnapShot.forEach((doc) => {
                items.push({
                    id: id.doc,
                    ...doc.data(),
                })
            })
            setCurrOrder(items)
        })
    }
    useEffect(()=>{
        try {
            const OrderCollection = firbaseInstance.firestore().
            collection('order')

            getOrder(OrderCollection)

        } catch (error) {
            console.log(error, 'error fra kjøkken');
        }
    }, [])

    function renderOrder() {

        let notfinishedorder  = [...currOrder.filter(
            (order) => order.complete === false )]
            return notfinishedorder.map((order)=>(
                <div key={order.id}>
                    <div>
                        <h2></h2>
                        <p></p>

                    </div>

                </div>
            )

        )
       
    }


}

export default Kitchen;