import firebaseInstance from '../config/firebase';
import Profile from '../pages/profile';
import Link from 'next/link';
import {useBasket} from '../contexts/BasketContext';

function Dip ({dip, error}){

    const basket = useBasket();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }

    return(
        <>
        <header>
            <h1>Børres Burger</h1> 
            <span className="deler"></span>
            <Link href="/cart">
            <h1> <a>Bestilling:<span>{basket.total}</span></a></h1>
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
                {dip.map(item=>{
                    return(
                        <div key={item.id}>
                            <h1 className="ProduktNavn">{item.navn}</h1>
                            <p>{item.pris}kr</p>
                            <button className="bestillBtn"
                            onClick={()=>{
                                handleAddToBasket(item)
                            }}
                            type="submit"
                            >Bestill</button>
                        </div>
                    )
                })}
            </ul>
        </main>
        </>
    )
}

Dip.getInitialProps= async( ) =>{

    try {

        const dipCollection = await firebaseInstance.firestore().collection('dip');
        const dipData = await dipCollection.get({})

        let dip = [];
        dipData.forEach(item =>{
            dip.push({
                id: item.id,
                ...item.data()
            });

        });

        return {dip};
        
    } catch (error) {
        return{
            error: error.message
        };
        
    }
}

export default Dip;