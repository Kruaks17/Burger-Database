import React, {useState} from 'react';
import firebase from '../config/firebase';
import Form from '../components/form';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useAuth} from '../auth';


const Singup = ()=>{

    const [fullName, setFullName]= useState(null);
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [error, setError]=useState(null);
    const history = useRouter();


    
    
    
    
    const handleSubmit = async(event)=>{

        event.preventDefault();

        console.log(email, password, fullName);

        try {

            await firebase.auth().createUserWithEmailAndPassword(email, password);
            user.updateProfile({dipalyName : fullName})
            userColletion.doc(users.user.uid).set({
            userId: users.user.uid,
            userEmail: users.user.email,
            userNamer: users.user.name,
            })
            history.push("/");
            console.log("Du har blitt logget inn");
            
        } catch (error) {
            setError(error.message);
            console.log("Noe gikk galt");
        }
    };
    
    return(
        <>
        <h1 className="Login-Overskrift">Registrer bruker</h1>
        <form className="signUpContainer"  onSubmit={handleSubmit}>
            <h2>Fullt navn</h2>
            <input type="text" onChange={e=>setFullName(e.target.value)} placeholder="Fullt navn"/>
            <h2>Email</h2>
            <input type="text" name="email" placeholder="Email"
            onChange={e=>setEmail(e.target.value)}/>
            <h2>Passord</h2>
            <input type="password" name="password" placeholder="Passord på 6 tegn minst"
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