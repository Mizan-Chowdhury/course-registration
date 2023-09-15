// import { useState } from 'react'
import "./App.css";
import Cards from "./CardSection/Cards";
import CartSec from "./CartSection/CartSec";
function App() {
  // const []= useState([]);

  return (
    <>
      <h1 className="text-center text-4xl font-bold my-10">
        Course Registration
      </h1>
      <div className="flex gap-5 mx-20">
        <Cards></Cards>
        <CartSec></CartSec>
      </div>
    </>
  );
}

export default App;
