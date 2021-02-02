import {
  IoBagRemoveOutline,
  IoBagAddOutline,
  IoInformationCircleOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../common/container";

export const CartItems = ({
  checkoutState,
  children,
  handleOpen,
  handleClose,
  cartStatus,
}) => {
  const controller = cartStatus ? (
    <a href="/" className="Cart__close" onClick={(e) => handleClose(e)}>
      <IoBagRemoveOutline /> Empty Cart
    </a>
  ) : (
    <>
      <a href="/" className="Cart__ctrl--delete" onClick={(e) => handleOpen(e)}>
        <IoBagAddOutline /> Restore Deleted Items
      </a>
      <br />
      <NavLink className="Cart__ctrl--shop" to="/products">
        <IoStorefrontOutline /> Shop
      </NavLink>
    </>
  );

  return (
    <div className="Cart__container">
      <header>
        <h2 className="Cart__title">My Bag</h2>
        <div>{controller}</div>
      </header>
      <div className="Cart__Items">{children}</div>
      <footer className="Cart__footer">
        <p className="Cart__footer--subtotal">
          <span>subtotal</span> € {checkoutState.subtotalPrice}
        </p>
        <p className="Cart__footer--taxed">
          <span>taxes</span> € {checkoutState.totalTax}
        </p>
      </footer>
    </div>
  );
};

export const Checkout = ({ checkoutState, openCheckout }) => (
  <div className="Cart__checkout">
    <h2 className="Cart__checkout--title">Total</h2>
    <p className="Cart__checkout--subtotal">
      <span className="title">Sub-total</span>
      <span>€ {checkoutState.subtotalPrice}</span>
    </p>
    <p className="Cart__checkout--delivery">
      <span className="title">Delivery</span>
      <span className="icon">
        <IoInformationCircleOutline size="20px" /> Calculated at Checkout
      </span>
    </p>
    <button className="Cart__checkout--button" onClick={(e) => openCheckout(e)}>
      Checkout
    </button>
  </div>
);

export const CartContainer = ({ children }) => (
  <CartWrapper>{children}</CartWrapper>
);

const CartWrapper = styled(Container)`
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid black;
    margin-bottom: 40px;
    padding-bottom: 10px;

    h2 {
      font-size: 2rem;
    }

    a {
      display: block;
    }
  }
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  .Cart__container {
    flex: 1;
    margin-right: 20px;
  }
  .Cart__checkout {
    max-width: 50%;
    background: #eee;
    padding: 40px;
    flex: 1;
  }

  .Cart__footer {
    p {
      text-align: right;
      margin-bottom: 10px;
    }
    span {
      opacity: 0.5;
    }
  }

  .Cart__checkout {
    position: sticky;
    top: 1rem;

    .Cart__checkout--title {
      font-size: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #000;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.5;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .icon {
      opacity: 0.5;
    }
    .Cart__checkout--button {
      background: #333;
      color: white;
      width: 100%;
      margin-top: 10px;
      font-weight: bold;
    }
  }

  button {
    cursor: pointer;
  }
`;
