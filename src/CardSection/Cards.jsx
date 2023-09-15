import Card from "./Card";

const Cards = ({clickedCards}) => {
    return (
        <div>
            <Card clickedCards={clickedCards}></Card>
        </div>
    );
};

export default Cards;