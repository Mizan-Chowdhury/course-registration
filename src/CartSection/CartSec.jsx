const CartSec = ({ selectedCard }) => {
  return (
    <div className="w-3/5">
      <dir>
        <div className="bg-[#FFF] rounded-xl p-5">
          <div className="mb-5">
            <h1 className="text-[#2F80ED] font-bold text-xl">
              Credit Hour Remaining hr
            </h1>
          </div>
          <hr />
          <div className="my-5">
            <h1 className="font-bold text-xl">Course Name</h1>
            <ol className="space-y-2 mt-5">
              {selectedCard.map((card, inx) => (
                <li className="text-[#1C1B1B99]" key={inx}>
                  {inx + 1} {card.title}
                </li>
              ))}
            </ol>
          </div>
          <hr />
          <div className="my-5">
            <h1>Total Credit Hour : 13</h1>
          </div>
          <hr />
          <div className="mt-5">
            <h1>Total Price : 48000 USD</h1>
          </div>
        </div>
      </dir>
    </div>
  );
};

export default CartSec;
{
  /* {selectedCard.map((card,inx) => (
        <Clicked key={inx} card={card}></Clicked>
      ))} */
}
