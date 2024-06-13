import './Bottle.css';
import PropTypes from 'prop-types';
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, img } = bottle;
  return (
    <div className='bottle-container'>
      <div className='bottle'>
        <h4>Name: {name} </h4>
        <img src={img} alt={name} />
        <p>Price: {price} </p>
        <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;
