import firebaseInstance from '../config/firebase';


function Burger ({burger, error}){

    return(
        
        <main>
            <h1>Burgere</h1>
            <ul>
                {burger.map(item=>{
                    return(
                        <li key={item.id}>
                            {JSON.stringify(item)}
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
Burger.getInitialProps= async( ) =>{

    try {

        const brugereCollection = await firebaseInstance.firestore().collection('burgere');
        const burgerData = await brugereCollection.get({})

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