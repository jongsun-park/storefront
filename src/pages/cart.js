import React, { useEffect } from "react";
import { useShopify } from "../modules/shopify";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";

const LineItem = () => {
  const { checkoutState, updateQuantity, removeLineItem } = useShopify();
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

  return (
    <li className="Line-item">
      {checkoutState.lineItems &&
        checkoutState.lineItems.map((lineItem, i) => {
          return (
            <div key={`${lineItem.title}` + i} className="lineItemDiv">
              <div className="Line-item__img">
                {lineItem.variant.image ? (
                  <img
                    src={lineItem.variant.image.src}
                    alt={`${lineItem.title} product shot`}
                  />
                ) : null}
              </div>
              <div className="Line-item__content">
                <div className="Line-item__content-row">
                  <div className="Line-item__variant-title">
                    {lineItem.variant.title}
                  </div>
                  <span className="Line-item__title">{lineItem.title}</span>
                </div>
                <div className="Line-item__content-row">
                  <div className="Line-item__quantity-container">
                    <button
                      className="Line-item__quantity-update"
                      onClick={(e) =>
                        decrementQuantity(lineItem.id, lineItem.quantity, e)
                      }
                    >
                      -
                    </button>
                    <span className="Line-item__quantity">
                      {lineItem.quantity}
                    </span>
                    <button
                      className="Line-item__quantity-update"
                      onClick={(e) => {
                        incrementQuantity(lineItem.id, lineItem.quantity, e);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span className="Line-item__price">
                    $ {(lineItem.quantity * lineItem.variant.price).toFixed(2)}
                  </span>
                  <button
                    className="Line-item__remove"
                    onClick={(e) => deleteLineItem(lineItem.id, e)}
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </li>
  );
};

const Cart = (props) => {
  const {
    cartStatus,
    closeCart,
    openCart,
    checkoutState,
    setCount,
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

  useEffect(() => {
    const button = document.querySelector("button.App__view-cart");
    if (cartStatus === true) {
      button.classList.add("hide");
    } else {
      button.classList.remove("hide");
    }

    function getCount() {
      let lineItems =
        checkoutState.lineItems && checkoutState.lineItems.length > 0
          ? checkoutState.lineItems
          : [];
      let count = 0;
      lineItems.forEach((item) => {
        count += item.quantity;
        return count;
      });

      setCount(count);
    }

    getCount();
  }, [cartStatus, checkoutState]);

  return (
    <div id="cart">
      <div className={`Cart ${cartStatus ? "Cart--open" : ""}`}>
        <div className="App__view-cart-wrapper2">
          <button className="App__view-cart" onClick={(e) => handleOpen(e)}>
            <MdShoppingCart />
          </button>
        </div>
        <header className="Cart__header">
          <h2>Your cart</h2>
          <button className="Cart__close" onClick={(e) => handleClose(e)}>
            <MdRemoveShoppingCart />
          </button>
        </header>
        <ul className="Cart__line-items">
          <LineItem />
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {checkoutState.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {checkoutState.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {checkoutState.totalPrice}</span>
            </div>
          </div>
          <button
            className="Cart__checkout button"
            onClick={(e) => openCheckout(e)}
          >
            Checkout
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Cart;
