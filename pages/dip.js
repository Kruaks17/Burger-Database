import firebaseInstance from '../config/firebase';

function Dip ({dip, error}){

    return(
        <main>
            <h1>Dip</h1>
            <ul>
                {dip.map(item=>{
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