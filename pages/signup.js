import React, {useState} from 'react';
import firebase from '../config/firebase';


const Singup = ()=>{

    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [error, setError]=useState(null)
    
    const handleSubmit = async(event)=>{

        event.preventDefault();

        try {

            await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log("Du har blitt logget inn");
            
        } catch (error) {
            setError(error.message);
            console.log("Noe gikk galt");
        }
    };
    
    return(

        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email"
            onChange={e=>setEmail(e.target.value)}/>
            <input type="text" name="password" placeholder="Password"
            onChange={e=>setPassword(e.target.value)}/>
            <button type="submit">Logg Inn</button>


        </form>

    )
}

export default Singup;