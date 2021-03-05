import React, {useEffect} from 'react'
import firebase from '../config/firebase'
import {useRouter} from 'next/router';
import {useAuth} from '../auth';

const Profile = () => {

    const Router = useRouter();
    const userContext = useAuth();
  
  useEffect(()=>{
      
    console.log("The Context", userContext.user);

  }, [userContext])
  
  const handleSignOut = async () =>{
  
    const logout = await firbase.auth().signOut();
    router.push("/login")
};
    return(
        <div>
        <button onClick={handleSignOut}>Logg ut</button>
        {userContext && (
            <>

            <p>{userContext.user.email}</p>
            <p>{userContext.user.uid}</p>

            </>
        )}
        
        </div>
    )
  }

export default Profile;