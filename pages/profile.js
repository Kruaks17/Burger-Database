import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../auth';

import firbaseInstance from '../config/firebase';

const Profile = () => {
  const router = useRouter();
  const userContext = useAuth();

  useEffect(() => {

    console.log("The Context");
    

  }, [userContext])

  const handleSignOut = async () => {

    router.push("/login")
  };
  return (
    <>
      <button className="login-btn" onClick={handleSignOut}>Logg ut</button>
    </>
  )
}

export default Profile;