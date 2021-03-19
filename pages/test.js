import React, { useEffect } from "react";



const Burger = ({ burger }) => {
  console.log(burger);

  return <>Hello</>;
};

//Henter inn burger kolleksjonen fra firebase
Burger.getInitialProps = async () => {




  return { burger: [] };
};

export default Burger;