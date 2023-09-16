const CartSec = ({ selectedCard, count, remaining, price }) => {
  return (
    <div className="w-3/5">
      <dir>
        <div className="bg-[#FFF] rounded-xl p-5">
          <div className="mb-5">
            <h1 className="text-[#2F80ED] font-bold text-lg">
              Credit Hour Remaining {remaining} hr
            </h1>
          </div>
          <hr />
          <div className="my-5">
            <h1 className="font-bold text-lg">Course Name</h1>
            <ol className="space-y-2 mt-5">
              {selectedCard.map((card, inx) => (
                <li key={inx}>
                  {inx + 1} {card.title}
                </li>
              ))}
            </ol>
          </div>
          <hr />
          <div className="my-5">
            <h1>Total Credit Hour : {count}</h1>
          </div>
          <hr />
          <div className="mt-5">
            <h1>Total Price : {price} USD</h1>
          </div>
        </div>
      </dir>
    </div>
  );
};

export default CartSec;
