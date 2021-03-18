import React, { useEffect } from 'react';
import Link from 'next/link';
import { useBasket } from "../contexts/BasketContext";
import firebaseInstance from '../config/firebase';
import LoginBtn from '../components/LoginBtn';
import { useRouter } from 'next/router';

function Burger({ burger, error }) {

  const basket = useBasket();
  const router = useRouter();
  /*const [image, setImage]= useState(null);*/


  /*useEffect(()=>{
 
       const storageRef = firbase.storage().ref(user.uid);
       const imageChild = storageRef.child('')
       const url = await imageChild.getDownlaodURL()
 
 
  })
 */
  const handleAddToBasket = (item) => {
    basket.addProductLine(item);
  }
  const quantity = basket.productLines.length;

  return (
    <>
      <header>
        <h1 className="borre">Børres Burger</h1>
        <span className="deler"></span>
        <Link href="/cart">
          <h1><a>Bestilling:<span>{quantity}</span></a></h1>
        </Link>
        <LoginBtn />
      </header>
      <section className="meny">
        <Link href="/">
          <a>Burger</a>
        </Link>
        <Link href="/fries">
          <a>Fries</a>
        </Link>
        <Link href="/dip">
          <a>Dip</a>
        </Link>
      </section>
      <main className="menu-container">
        <ul>
          {burger.map(item => {
            return (
              <div key={item.id}>
                <h2 className="ProduktNavn">{item.navn}</h2>
                <p>{item.pris}kr</p>
                <button className="bestillBtn"
                  onClick={() => {
                    handleAddToBasket(item)
                  }}
                  type="submit"
                >Bestill</button>
              </div>
            )
          })}
        </ul>
      </main>
    </>
  )
}
Burger.getInitialProps = async () => {

  try {

    const brugereCollection = await firebaseInstance.firestore().collection('burgere');
    const burgerData = await brugereCollection.get()

    /*const storageRef = firbase.storage().ref(user.uid);
    const imageChild = storageRef.child('')
    await imageChild.put(data.avatar[0])
    console.log('completed upload')*/

    let burger = [];
    burgerData.forEach(item => {
      burger.push({
        id: item.id,
        ...item.data()
      });
    });
    return { burger };

  } catch (error) {
    return {
      error: error.message
    };

  }

}



export default Burger;
