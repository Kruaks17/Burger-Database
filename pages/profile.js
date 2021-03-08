import React, {useEffect} from 'react';
import firebase from '../config/firebase';
import {useRouter} from 'next/router';
import {useAuth} from '../auth';



const Profile = () => {
    const router = useRouter();
    const userContext = useAuth();
  
  useEffect(()=>{
      
    console.log("The Context", userContext);

  }, [userContext])
  
  const handleSignOut = async () =>{
  
    const logout = await firebase.auth().signOut();
    router.push("/login")
};
    return(
        <button 
        className="loggut_btn" 
        onClick={handleSignOut}>Logg ut</button>
      
    )
  }

export default Profile;