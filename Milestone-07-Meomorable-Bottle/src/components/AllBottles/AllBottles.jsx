import './AllBottles.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import Cart from '../Cart/Cart';
import { addToLS, getStoredCart, removeFromLS } from '../../utilities/localstorage';

const AllBottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('bottles.json');
      const data = await res.json();
      setBottles(data);
    };
    fetchDetails();
  }, []);

  // load cart from local storage
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
       const savedCart = [];

      for (const id of storedCart) {
        const bottle = bottles.find(bottle => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle)
        }
      }
      setCart(savedCart)
    }
    
  }, [bottles])

  // handle purchase button 
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id)
  };

  // handle remove button
  const handleRemoveFromCart = (id) => {
    
    // remove from visual cart
    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart)
    
    // remove from local storage
    removeFromLS(id)
  }

  return (
    <div>
      <h3>Bottles Available: {bottles.length} </h3>
      <Cart
        handleRemoveFromCart={handleRemoveFromCart}
        cart={cart}></Cart>
      <div className='bottle-container'>
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default AllBottles;
