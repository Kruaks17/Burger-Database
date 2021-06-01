import { AuthProvider } from '../auth';
import { Basket } from '../contexts/BasketContext';
import '../styles/Global.css';
import Head from 'next/head';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <meta lang="no" name="Børres-Burger" content="Burger restaurant hvor du kan 
      bestille burgere til take-away"/>
       
         
      
      <AuthProvider>
        <Basket>
          <Component {...pageProps} />
        </Basket>
      </AuthProvider>
    </>
  )
}

export default MyApp