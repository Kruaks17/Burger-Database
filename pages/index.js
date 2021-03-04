import Head from 'next/head'

import {useState} from 'react';
import firbaseInstance from '../config/firebase';
import Link from 'next/link';
import Image from 'next/image';



export default function Home() {
  return (
    <>
    <header>
      <h1>Børres Burger</h1> <span className="deler"></span> <h1>Bestillinger</h1>
    </header> 
    <section className="meny">
      <Link href="/burger">
        <a>Burger</a>
      </Link>
      <Link href="/fries">
        <a>Fries</a>
      </Link>
      <Link href="/dip">
        <a>Dip</a>
      </Link>
    </section>
    </>

    
  )
}

