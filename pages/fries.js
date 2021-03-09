import firebaseInstance from '../config/firebase';
import Profile from '../pages/profile';

function Fries ({fries, error}){

    return(
        <>
        <header>
        <h1>Børres Burger</h1> 
         <span className="deler"></span>
         <h1>Bestilling<span>0</span></h1>
         <Profile/>
        </header> 
        <main> 
            <ul>
                {fries.map(item=>{
                    return( 
                        <div key={item}>
                            <h1 className="ProduktNavn">{item.navn}</h1>
                            <p>{item.pris}kr</p>
                            <button>Bestill</button>
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