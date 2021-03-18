import React from 'react';
import Link from 'next/link';
import {useAuth} from '../../auth';
import {useRouter} from 'next/router';
import firbaseInstance from '../../config/firebase';


const LoginBtn = () =>{
    
    const user = useAuth();
    const router = useRouter();
    
    const handleSignOut  = async () => {

        await firbaseInstance.auth().signOut();
        router.push("/")
    }
    return(    
        <>
            {user ? (    
                <button onClick={handleSignOut}>Logg ut</button>
            ):(
                <>
                <Link href="/login">
                <button><a>Logg inn</a></button></Link>
                </>   
            )}
        </>
    )

};



export default LoginBtn;