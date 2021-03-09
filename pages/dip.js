import firebaseInstance from '../config/firebase';

function Dip ({dip, error}){

    return(
        <>
        <header>
            <h1>Børres Burger</h1> 
            <span className="deler"></span>
            <h1>Bestilling<span>0</span></h1>
            <Profile/>
        </header> 
        <main>
            <h1>Dip</h1>
            <ul>
                {dip.map(item=>{
                    return(
                        <div key={item.id}>
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