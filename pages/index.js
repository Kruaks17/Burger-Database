import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react';
import firbaseInstance from '../config/firebase';
import Link from 'next/link';
import Image from 'next/image';

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
    <>
    <header>
      <h1>Burger</h1>
    </header> 
    <main>
      <Link href="/burger">
        <a> Burger </a>
      </Link>
      <Link href="/fries">
        <a> Fries </a>
      </Link>
      <Link href="/dip">
        <a> Dip </a>
      </Link>
    </main>
    </>

    
  )
}

