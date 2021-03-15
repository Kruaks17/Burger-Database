import firebaseInstance from '../config/firebase';
import Profile from '../pages/profile';
import Link from 'next/link';
import {useBasket} from '../contexts/BasketContext';

function Fries ({fries, error}){

    const basket = useBasket();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }

    return(
        <>
        <header>
        <h1 className="borre" >Børres Burger</h1> 
         <span className="deler"></span>
         <Link href="/cart">
         <h1><a>Bestilling:<span>{basket.total}</span></a></h1>
         </Link>
         <Profile/>
        </header> 
        <section className="meny">
      <Link href="/">
        <a>Burger</a>
      </Link>
      <Link href="/fries">
        <a>Fries</a>
      </Link>
      <Link href="/dip">
        <a>Dip</a>
      </Link>
    </section>
        <main className="menu-container"> 
            <ul>
                {fries.map(item=>{
                    return( 
                        <div key={item.id}>
                            <h1 className="ProduktNavn">{item.navn}</h1>
                            <p>{item.pris}kr</p>
                            <button className="bestillBtn"
                            onClick={()=>{
                                handleAddToBasket(item)
                            }}
                            type="submit">Bestill</button>
                        </div>
                    )
                    })}
            </ul>
        </main>
        </>
    )
}
Fries.getInitialProps= async( ) =>{

    try {
        const friesCollection = await firebaseInstance.firestore().collection('fries');
        const friesData = await friesCollection.get({})

        let fries = [];
        friesData.forEach(item =>{
            fries.push({
                id: item.id,
                ...item.data()
            });

        });
        return {fries};
        
    } catch (error) {
        return{
            error: error.message
        };
        
    }
}

export default Fries;