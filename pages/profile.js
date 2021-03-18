import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../auth';
import Link from 'next/link';
import firbaseInstance from '../config/firebase';

const Profile = () => {
  const router = useRouter();
  const userContext = useAuth();
  const user = useAuth();

  useEffect(() => {

    console.log("The Context");

  }, [userContext])

  const handleSignOut = async () => {

    const logout = await firbaseInstance.auth().signOut();
    router.push("/login")
  };
  return (
    <>
      <button onClick={handleSignOut}>Logg ut</button>
    </>
  )
}

export default Profile;