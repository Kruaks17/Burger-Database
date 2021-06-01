import React from 'react';
import Link from 'next/link';
import {useAuth} from '../../auth.js';
import {useRouter} from 'next/router';
import firbaseInstance from '../../config/firebase';


const LoginBtn = () =>{
 
    const { user } = useAuth();
    const router = useRouter();

    const handleSignOut  = async () => {

        await firbaseInstance.auth().signOut();
        router.push("/")
    }
   
    return(    
        <>
            {user ? (     
                <button className="login-btn" onClick={handleSignOut}>Logg ut</button>
            ):(
                <>
                <Link href="/login">
                <button className="login-btn"><a>Logg inn</a></button>
                </Link>
                </>   
            )}
        </>
    )
};

export default LoginBtn;