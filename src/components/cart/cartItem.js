import styled from "styled-components";

const CartItem = ({
  checkoutState,
  decrementQuantity,
  incrementQuantity,
  deleteLineItem,
}) => {
  return (
    <CartItemContainer>
      <li className="cart-item">
        {checkoutState.lineItems &&
          checkoutState.lineItems.map((lineItem, i) => {
            return (
              <div
                key={`${lineItem.title}` + i}
                className="cart-item__container"
              >
                <div className="cart-item__img">
                  {lineItem.variant.image ? (
                    <img
                      src={lineItem.variant.image.src}
                      alt={`${lineItem.title} product shot`}
                    />
                  ) : null}
                </div>
                <div className="cart-item__content">
                  <div className="cart-item__content-row">
                    <div className="cart-item__variant-title">
                      {lineItem.variant.title}
                    </div>
                    <span className="cart-item__title">{lineItem.title}</span>
                  </div>
                  <div className="cart-item__content-row">
                    <div className="cart-item__quantity-container">
                      <button
                        className="cart-item__quantity-update"
                        onClick={(e) =>
                          decrementQuantity(lineItem.id, lineItem.quantity, e)
                        }
                      >
                        -
                      </button>
                      <span className="cart-item__quantity">
                        {lineItem.quantity}
                      </span>
                      <button
                        className="cart-item__quantity-update"
                        onClick={(e) => {
                          incrementQuantity(lineItem.id, lineItem.quantity, e);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item__price">
                      €{" "}
                      {(lineItem.quantity * lineItem.variant.price).toFixed(2)}
                    </span>
                    <button
                      className="cart-item__remove"
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
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  .cart-item {
    list-style: none;
    .cart-item__container {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;

      .cart-item__img {
        max-width: 200px;
        margin-right: 40px;
        padding: 20px;
        img {
          width: 100%;
        }
      }

      .cart-item__content {
        position: relative;

        .cart-item__content-row {
          max-width: calc(100% - 36px);
        }

        .cart-item__variant-title {
          font-size: 14px;
          margin-bottom: 10px;
        }

        .cart-item__title {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 20px;
          display: inline-block;
          line-height: 1.5;
        }

        button {
          width: 32px;
          height: 32px;
          padding: 0;
          margin: 0;
          border: 1px solid #eee;
          background: white;
        }

        .cart-item__quantity-container {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          max-width: 100px;
          margin-bottom: 10px;
        }
        .cart-item__quantity {
          flex: 1;
          text-align: center;
        }

        .cart-item__remove {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
  }
`;
