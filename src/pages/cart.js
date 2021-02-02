import React, { useEffect } from "react";

import { useShopify } from "../modules/shopify";

// view
import { CartContainer, CartItems, Checkout } from "../components/cart";
import CartItem from "../components/cart/cartItem";

const Cart = (props) => {
  const {
    cartStatus,
    closeCart,
    openCart,
    checkoutState,
    getCount,
    updateQuantity,
    removeLineItem,
  } = useShopify();

  function handleOpen(e) {
    e.preventDefault();
    openCart();
  }

  function handleClose(e) {
    e.preventDefault();
    closeCart();
  }

  function openCheckout(e) {
    e.preventDefault();
    // window.open(checkoutState.webUrl) // opens checkout in a new window
    window.location.replace(checkoutState.webUrl); // opens checkout in same window
  }

  function decrementQuantity(lineItemId, lineItemQuantity, e) {
    e.preventDefault();
    const checkoutId = checkoutState.id;
    const updatedQuantity = lineItemQuantity - 1;
    updateQuantity(lineItemId, updatedQuantity, checkoutId);
  }

  function incrementQuantity(lineItemId, lineItemQuantity, e) {
    e.preventDefault();
    const checkoutId = checkoutState.id;
    const updatedQuantity = lineItemQuantity + 1;
    updateQuantity(lineItemId, updatedQuantity, checkoutId);
  }

  function deleteLineItem(lineItemId, e) {
    e.preventDefault();
    const checkoutId = checkoutState.id;
    removeLineItem(checkoutId, lineItemId);
  }

  useEffect(() => {
    getCount(checkoutState);
  }, [getCount, checkoutState]);

  return (
    <CartContainer id="cart">
      <CartItems
        checkoutState={checkoutState}
        handleOpen={handleOpen}
        handleClose={handleClose}
        cartStatus={cartStatus}
      >
        <CartItem
          checkoutState={checkoutState}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
          deleteLineItem={deleteLineItem}
        />
      </CartItems>
      <Checkout checkoutState={checkoutState} openCheckout={openCheckout} />
    </CartContainer>
  );
};

export default Cart;
