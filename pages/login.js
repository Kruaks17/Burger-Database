import React, {useState, useEffect} from 'react';
/* import firebase from '../config/firebase/auth'; */

const Login = () =>{

    const [user, setUser]= useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [emailError, setEmailError]=useState('');
    const [passwordError, setPassswordError]=useState('');
    const [hasAccount, setHasAccount]=useState(false);

    const handleLogin =() =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
            switch (error.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message)
                    break;
                case "auth/wrong-paasword":
                    setPassswordError(error.message)
                    break;
            }
        });
    };

    const handleSignUp = () => {

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
            switch (error.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(error.message)
                    break;
                case "auth/weak-password":
                    setPassswordError(error.message)
                    break;
            }
        });

    };

    return(
        <div>
            <h1>Hello</h1>
        </div>

    )

}

export default Login;