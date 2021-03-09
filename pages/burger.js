import firebaseInstance from '../config/firebase';
import Profile from "../pages/profile";
import {useBasket} from "../contexts/BasketContext";




function Burger ({burger, error}){

    const basket = useBasket();

    const handleAddToBasket = (item) => {
        basket.addProductLine(item);
    }
    

    return(
        <>
    <header>
      <h1> <a href="/">Børres Burger</a></h1> 
      <span className="deler"></span>
      <h1>Bestilling<span>{basket.total}</span></h1>
      <Profile/>
    </header> 
    <main>
        <ul>
            {burger.map(item=>{
                return(
                    <div key={item.id}>
                        <h2 className="ProduktNavn">{item.navn}</h2>
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

Burger.getInitialProps= async( ) =>{

    try {

        const brugereCollection = await firebaseInstance.firestore().collection('burgere');
        const burgerData = await brugereCollection.get()

        let burger = [];
        burgerData.forEach(item =>{
            burger.push({
                id: item.id,
                ...item.data()
            });
        });

        return {burger};
        
    } catch (error) {
        return{
            error: error.message
        };
        
    }

}


export default Burger;