import PropTypes from 'prop-types';
import Card from "./Card";

const Cards = ({clickedCards}) => {
    return (
        <div>
            <Card clickedCards={clickedCards}></Card>
        </div>
    );
};

Cards.propTypes = {
    clickedCards : PropTypes.func
}
export default Cards;