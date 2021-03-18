import React, { useState } from 'react';
import firebase from '../config/firebase';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../auth';
import Form from '../components/Form';
import Title from '../components/Title';

//------------------------------------------------------------------
//Lager ny bruker som blir lagt til i Firebase med navn og epost
const Singup = () => {

    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const history = useRouter();


    const handleSubmit = async (event) => {

        event.preventDefault();

        console.log(email, password, fullName);

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            await users.user.updateProfile({ displayName: fullName })
            userColletion.doc(users.user.uid).set({
                userId: users.user.uid,
                userEmail: users.user.email,
                userName: fullName,
            })
            history.push("/");
            console.log("Du har blitt logget inn");

        } catch (error) {
            setError(error.message);
            console.log("Noe gikk galt");
        }
    };
    return (
        <>
            <Title className="Login-Overskrift">Registrer bruker</Title>
            <Form as="main" onSubmit={handleSubmit}>
                <h2>Fullt navn</h2>
                <input type="text" onChange={e => setFullName(e.target.value)} placeholder="Fullt navn" />
                <h2>Email</h2>
                <input type="text" name="email" placeholder="Email"
                    onChange={e => setEmail(e.target.value)} />
                <h2>Passord</h2>
                <input type="password" name="password" placeholder="Passord på 6 tegn minst"
                    onChange={e => setPassword(e.target.value)} />
                <button className="btn" type="submit">Registrer</button>
                <Link href="/login">
                    <a className="link-login">Har du bruker? Trykk her.</a>
                </Link>
            </Form>
        </>
    )
}

export default Singup;