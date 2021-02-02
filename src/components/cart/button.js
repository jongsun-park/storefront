import { useState, useEffect } from "react";
import { useShopify } from "../../modules/shopify";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { IoBagAddOutline, IoBagCheckOutline } from "react-icons/io5";

const CartButton = () => {
  // show how many items in icon
  // click - open / close cart
  const { checkoutState, cartStatus, getCount } = useShopify();

  const { totalPrice, currencyCode } = checkoutState;

  const cartHandler = (e) => console.log("cart button clicked", cartStatus);

  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(getCount(checkoutState));
  }, [checkoutState, getCount]);

  const text = cartStatus
    ? `Cart ${count} items (${currencyCode === "EUR" && "€"} ${totalPrice})`
    : `Add Cart`;

  const path = cartStatus ? "/cart" : "/products";

  return (
    <ButtonContainer onClick={cartHandler}>
      <NavLink to={path}>
        {cartStatus ? (
          <IoBagCheckOutline size="16px" />
        ) : (
          <IoBagAddOutline size="16px" />
        )}
        <span>{text}</span>
      </NavLink>
    </ButtonContainer>
  );
};

export default CartButton;

const ButtonContainer = styled.button`
  border: none;
  background: none;
  margin-left: 10px;
  font-size: 14px;
  font-family: inherit;
  line-height: 1;
  border: 1px solid #eee;
  a {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }

  &:hover {
    background: #333;
    color: white;
    span,
    svg {
      color: white;
      font-size: 14px;
    }
  }
`;
