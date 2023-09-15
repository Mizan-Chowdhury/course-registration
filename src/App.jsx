import { useState } from 'react'
import "./App.css";
import Cards from "./CardSection/Cards";
import CartSec from "./CartSection/CartSec";
function App() {
  const [selectedCard, setSelectedCard]= useState([]);

  const clickedCards = (card) => {
    const cardArr = [...selectedCard, card];
    setSelectedCard(cardArr);
  }

  return (
    <>
      <h1 className="text-center text-4xl font-bold my-10">
        Course Registration
      </h1>
      <div className="flex gap-5 mx-20">
        <Cards clickedCards={clickedCards}></Cards>
        <CartSec selectedCard={selectedCard}></CartSec>
      </div>
    </>
  );
}

export default App;
