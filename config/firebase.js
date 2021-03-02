import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDING_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };
  
  try{
    firebase.initializeApp(firebaseConfig);
  }catch (error) {
    if (!/already exists/.test(error.massage)){
    console.error('Firebase error');
    }
  }

  const firbaseInstance = firebase;
  export default firbaseInstance;