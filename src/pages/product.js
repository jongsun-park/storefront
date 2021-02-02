import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";

import { useShopify } from "../modules/shopify";
import { Container } from "../components/common/container";

import { media } from "../styles/theme";

const Product = () => {
  const {
    product,
    fetchProduct,
    openCart,
    checkoutState,
    addVariant,
  } = useShopify();

  let { slug: id } = useParams();
  // const id = props.match.params.productId;
  const defaultSize = product.variants && product.variants[0].id.toString();
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const description = product.description && product.description.split(".");

  function changeSize(sizeId, quantity) {
    openCart();
    if (sizeId === "") {
      sizeId = defaultSize;
      const lineItemsToAdd = [
        { variantId: sizeId, quantity: parseInt(quantity, 10) },
      ];
      const checkoutId = checkoutState.id;
      addVariant(checkoutId, lineItemsToAdd);
    } else {
      const lineItemsToAdd = [
        { variantId: sizeId, quantity: parseInt(quantity, 10) },
      ];
      const checkoutId = checkoutState.id;
      addVariant(checkoutId, lineItemsToAdd);
    }
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  return (
    <ProductContainer id="individualProduct" className="product__container">
      <div className="product__images">
        {product.images &&
          product.images.map((image, i) => {
            return (
              <img
                key={image.id + i}
                src={image.src}
                alt={`${product.title} product shot`}
              />
            );
          })}
      </div>
      <div className="product__info">
        <h2 className="product__title">{product.title}</h2>
        <ul className="product__description">
          {description &&
            description.map((each, i) => {
              return <li key={`line-description +${i}`}>{each}</li>;
            })}
        </ul>
        <div className="product__options">
          <label htmlFor={"prodOptions"}>Size</label>
          <select
            id="prodOptions"
            name={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            {product.variants &&
              product.variants.map((item, i) => {
                return (
                  <option
                    value={item.id.toString()}
                    key={item.title + i}
                  >{`${item.title}`}</option>
                );
              })}
          </select>
        </div>
        <div className="product__options">
          <label>Quantity</label>
          <input
            className="quantity"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
        <h3 className="product__price">
          €{product.variants && product.variants[0].price}
        </h3>
        <button
          className="prodBuy button"
          onClick={(e) => changeSize(size, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </ProductContainer>
  );
};

export default Product;

const ProductResponsive = css`
  @media (max-width: ${media.m}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;

  > div {
    flex: 1;
  }

  .product__images {
    margin-right: 20px;
    max-width: 400px;
    img {
      max-width: 100%;
    }
  }
  .product__info {
    .product__title {
      font-size: 2rem;
      margin-bottom: 2rem;
      max-width: 18ch;
    }
    .product__description {
      line-height: 1.2;
      margin-bottom: 2rem;
      max-width: 80%;
      li {
        margin-bottom: 10px;
      }
    }
  }

  .product__price {
    margin: 1rem 0 2rem;
    font-size: 1rem;
  }

  .prodBuy {
    &:hover {
      background: #333;
      color: white;
    }
  }

  .product__options {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 36px;
    > * {
      flex: 1;
      padding-right: 0;
    }
  }

  ${ProductResponsive}
`;
