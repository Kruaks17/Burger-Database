import React, {useState} from 'react';
import firebase from '../config/firebase';
import Form from '../components/form';
import Link from 'next/link';
import {useRouter} from 'next/router';


const Singup = ()=>{

    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [error, setError]=useState(null);
    const history = useRouter();
    
    
    
    const handleSubmit = async(event)=>{

        event.preventDefault();

        try {

            await firebase.auth().createUserWithEmailAndPassword(email, password);
            history.push("/");
            console.log("Du har blitt logget inn");
            
        } catch (error) {
            setError(error.message);
            console.log("Noe gikk galt");
        }
    };
    
    return(
        <>
        <h1 className="Login-Overskrift">Lag en ny bruker for å logge inn</h1>
        <form className="signUpContainer"  onSubmit={handleSubmit}>
            <h2>Email</h2>
            <input type="text" name="email" placeholder="Email"
            onChange={e=>setEmail(e.target.value)}/>
            <h2>Passord</h2>
            <input type="password" name="password" placeholder="Passord"
            onChange={e=>setPassword(e.target.value)}/>
            <button className="btn" type="submit">Registrer</button>
            <Link  href="/login">
                <a className="link-login">Har du bruker? Trykk her.</a>
            </Link>
        </form>
        </>
    )
}

export default Singup;