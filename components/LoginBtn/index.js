import React from 'react';
import Link from 'next/link';
import {useAuth} from '../../auth';
import {useRouter} from 'next/router';
import firbaseInstance from '../../config/firebase';

const LogInBTn = () =>{
    
    const router = useRouter();
    const user = useAuth();


    const handleSignOut  = async () => {

        await firbaseInstance.auth().signOut();
        router.push("/")
    }
    return(    
        <>
            {user ? (    
                <button onCLick={handleSignOut}>Logg ut</button>
            ):(
                <>
                <Link href="/login"> <button>Logg inn </button></Link>
                </>   
            )}
        </>
    )

};



export default LogInBTn;