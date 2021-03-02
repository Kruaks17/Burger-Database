import firebaseInstance from '../config/firebase';

function Fries ({fries, error}){

    return(
        <main>
            <h1>Fries</h1>
            <ul>
                {fries.map(item=>{
                    return(
                        <li key={item}>
                            {JSON.stringify(item)}
                        </li>
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