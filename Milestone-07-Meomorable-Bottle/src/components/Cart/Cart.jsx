import './Cart.css'
import PropTypes from 'prop-types';
const Cart = (({ cart, handleRemoveFromCart }) => {
  return (
    <div className='container'>
      <h3>Cart: {cart.length} </h3>
      <div>
        {cart.map((bottle) => (
          <div className='cart-container' key={bottle.id}>
              <img src={bottle.img} />
              <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
});

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart : PropTypes.func.isRequired
}

export default Cart;