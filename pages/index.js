import React, {useEffect} from 'react';
import Link from 'next/link';
import Profile from "../pages/profile";


export default function Home() {
  return (
    <>
    <header>
      
      <h1>Børres Burger</h1> 
      <span className="deler">
      </span> <h1>Bestillinger</h1>
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

    <footer>
    <Profile/>
    </footer>
    </>

    
  )
}

