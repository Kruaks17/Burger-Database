import firebaseInstance from '../config/firebase';

function Fries ({fries, error}){

    return(
        <main>
            <h1>Fries</h1>
            <ul>
                {fries.map(item=>{
                    
                    return(
                        
                        <div key={item}>
                            <h1>{item.navn}</h1>
                            <p>{item.pris}kr</p>
                            <button>Bestill</button>
                        </div>
                    )
                    })}
            </ul>
        </main>
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