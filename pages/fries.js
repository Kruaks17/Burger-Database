import firebaseInstance from '../config/firebase';
import React, { useState } from 'react';
import Profile from '../pages/profile';
import Link from 'next/link';
import { useBasket } from '../contexts/BasketContext';
import { motion } from 'framer-motion';

function Fries({ fries }) {

  const basket = useBasket();
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToBasket = (item) => {
    basket.addProductLine(item);
  }

  //------------------------------------
  // Fjerne funskjon fra BasketContext
  const fjern = (id) => {

    basket.deleteHandler(id);
  };

  const iconVariants = {
    open: {

      transition: { duration: 0.5 },
    },
    closed: {

      transition: { duration: 0.5 },
    }
  }

  const popUpVariants = {
    open: {

      opacity: 100,
      transition: { duration: 0 },
      display: "inline",
    },
    closed: {
      opacity: 0,
      transition: { duration: 0 },
      display: "none",
    }
  }

  const { updateCount } = basket;

  //-----------------------------------------------
  //Viser antall bestillinger som er lagt til i cart
  const quantity = basket.productLines.length;

  return (
    <>
      <title> Børres-Burger / Sides </title>
      <header>
        <h1 className="borre">Børres Burger</h1>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
            <h1 className="handletitel">Cart({quantity})</h1>
            <span>
              <motion.svg

                className="arrow"
                cursor="pointer"
                tabIndex={0}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={iconVariants}
                onClick={() => setIsOpen(state => !state)}
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                fill="#FFF"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
              </motion.svg>


            </span>
          </div>
          <motion.ul
            className="dropdown-menu"
            initial={false}
            variants={popUpVariants}
            animate={isOpen ? "open" : "closed"}
          >
            {basket.productLines && basket.productLines.map((item) => {
              return (
                <>
                  <div key={item.id}>
                    <h2 className="drop-down-item">{item.navn}</h2>
                    <p className="priser">{item.pris}kr</p>
                    <input
                      onChange={(event) => { updateCount(item.id, event.target.value) }}
                      className="drop-down-input"
                      type="number"
                      placeholder={1}
                      min-value={1}
                    ></input>
                    <button role="button" className="removeBtn-drop"
                      onClick={() => {
                        fjern(item.id)
                      }}>Fjern
                          </button>
                  </div>
                </>
              )
            })}
            <h2>Totaltsum:{basket.total}kr</h2>
            <Link href="/cart">
              <a><h2 className="betaling">Til betaling</h2></a>
            </Link>
          </motion.ul>
        </div>

      </header>
      <nav>
        <Link href="/">
          <a className="knupper">Burger</a>
        </Link>
        <Link href="/fries">
          <a className="knupper">Sides</a>
        </Link>
        <Link href="/dip">
          <a className="knupper">Dip</a>
        </Link>
      </nav>
      <main className="menu-container">
        <ul>
          {fries.map(item => {
            return (
              <div key={item.id}>
                <img src={item.bilde}
                  alt="Bilder av produkter"
                  style={{ width: "100%" }}
                />
                <h1 className="ProduktNavn">{item.navn}</h1>
                <p className="beskrivelse">{item.beskrivelse}</p>
                <p className="priser">{item.pris}kr</p>
                <button className="bestillBtn"
                  onClick={() => {
                    handleAddToBasket(item)
                  }}
                  type="submit">Bestill</button>
              </div>
            )
          })}
        </ul>
      </main >
      <footer>
        <p>Børres Burger©</p>
        <Profile />
      </footer>
    </>
  )
}

Fries.getInitialProps = async () => {

  try {
    const friesCollection = await firebaseInstance.firestore().collection('fries');
    const friesData = await friesCollection.get({})

    let fries = [];
    friesData.forEach(item => {
      fries.push({
        id: item.id,
        ...item.data()
      });

    });
    return { fries };

  } catch (error) {
    return {
      error: error.message
    };

  }
}

export default Fries;