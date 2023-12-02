import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { BsBook } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
const Card = ({ clickedCards }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {cards.map((card, inx) => (
        <div key={inx} className="p-4 bg-[#FFF] rounded-xl flex flex-col">
          <div>
            <img className="w-full" src={card.cover} alt="" />
          </div>
          <div className="flex-grow">
            <h1 className="text-lg font-semibold my-3">{card.title}</h1>
            <p className="text-sm text-[#1C1B1B99] flex-grow">
              {card.description}
            </p>
          </div>
          <div className="flex justify-between my-3">
            <div className="flex gap-3">
              <button>
                <FiDollarSign></FiDollarSign>
              </button>
              <span className="text-[#1C1B1B99]">Price : {card.price}</span>
            </div>
            <div className="flex gap-3">
              <button>
                <BsBook></BsBook>
              </button>
              <span className="text-[#1C1B1B99]">Credit :{card.credit}hr</span>
            </div>
          </div>
          <div className="text-center">
            <button
              className="bg-[#2F80ED] w-full rounded-lg py-1 text-white"
              onClick={() => clickedCards(card)}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  clickedCards: PropTypes.func,
};
export default Card;
