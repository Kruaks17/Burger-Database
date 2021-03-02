import Head from 'next/head'
import styles from '../styles/Home.module.css'
import firebaseInstance from '../config/firebase';
import {useState} from 'react';
import firbaseInstance from '../config/firebase';


function burger(){

  const [navn, setNavn]= useState(null);
  const [pris, setPris]= useState(null);

  function burgerHandler (event){
    event.preventDefault()
    console.log(navn, pris);

    const collection = firbaseInstance.firestore().collection('burgere');
    collection.doc().set({
      navn: navn,
      pris: pris

    })
    .then (()=>{
      console.log();
    })
    .catch(error =>{
      console.error(error);
    })

  }

}

export default function Home() {
  return (
    <header>
      <h1>Burger</h1>
    </header>
    

    
  )
}

