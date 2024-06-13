function getStoredCart() {
  let storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
}

function saveCartToLS(cart) {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

function addToLS(id) {
  const cart = getStoredCart();
  cart.push(id)
  // save to local storage
  saveCartToLS(cart)
}

function removeFromLS(id) {
   const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining)
}

export {addToLS, getStoredCart, saveCartToLS, removeFromLS  }