import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./App.css";
import Cards from "./CardSection/Cards";
import CartSec from "./CartSection/CartSec";
function App() {
  const [selectedCard, setSelectedCard] = useState([]);
  const [count, setCount] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [price, setPrice] = useState(0);

  let totalRemaining = 20;
  const clickedCards = (card) => {
    const cardArr = [...selectedCard, card];
    const isExist = selectedCard.find((item) => item.id === card.id);
    if (isExist) {
      return toast("The course is already selected");
    } else {
      let creditCount = card.credit;
      let totalPrice = card.price;
      selectedCard.forEach((item) => {
        (creditCount = creditCount + item.credit),
          (totalPrice = totalPrice + item.price);
      });
      totalRemaining = totalRemaining - creditCount;
      if (creditCount > 20) {
        return toast("Opps! Cannot add credit more than 20 hours");
      } else {
        setCount(creditCount);
      }
      setRemaining(totalRemaining);
      setSelectedCard(cardArr);
      setPrice(totalPrice);
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold my-10">
        Course Registration
      </h1>
      <div className="flex gap-5 mx-20">
        <Cards clickedCards={clickedCards}></Cards>
        <CartSec
          selectedCard={selectedCard}
          count={count}
          remaining={remaining}
          price={price}
        ></CartSec>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
