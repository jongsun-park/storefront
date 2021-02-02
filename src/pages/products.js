import { useState, useEffect } from "react";
import styled from "styled-components";
import { client, useShopify } from "../modules/shopify";
import { Container } from "../components/common/container";
import { colors } from "../styles/theme";
import { Pagination } from "../components/common/pagination";
import { StyledButton } from "../components/common/button";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const { fetchProduct } = useShopify();

  function handleClick(e, product_id) {
    e.preventDefault();
    const id = product_id;
    fetchProduct(id).then((res) => {
      props.history.push(`/Product/${res.id}`);
    });
  }

  const first = 250;

  useEffect(() => {
    client.product.fetchAll(first).then((products) => {
      setProducts(products);
    });
  }, []);

  const [index, setIndex] = useState(0);

  const perPage = 12;
  const maxItems = products.length;

  return (
    <>
      <HeaderContainer>
        <h2>All Products</h2>
        <Pagination
          index={index}
          setIndex={setIndex}
          perPage={perPage}
          maxItems={maxItems}
        />
      </HeaderContainer>
      <ProductContainer className="product-wrapper">
        {products &&
          products.map((product, i) => {
            const image = product.images[0];
            return (
              <div
                className={`product ${
                  index < i && i <= index + perPage ? "show" : "hidden"
                }`}
                key={product.id + i}
              >
                {image ? <Image url={image.src} /> : null}
                <div>
                  <h4 className="product__title">{product.title}</h4>
                  <p className="product__price">
                    € {product.variants[0].price}
                  </p>
                </div>
                <StyledButton
                  small
                  className="product__buy button"
                  onClick={(e) => handleClick(e, product.id)}
                >
                  View Details
                </StyledButton>
              </div>
            );
          })}
      </ProductContainer>
    </>
  );
};

export default Products;

const Image = ({ url }) => (
  <div className="product__image" style={{ backgroundImage: `url(${url})` }} />
);

const HeaderContainer = styled(Container)`
  position: relative;
  margin-bottom: 0;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
const ProductContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  .product {
    width: 30%;
    margin: 0 20px 20px 0;
    border: 1px solid ${colors.lightgray};
    padding: 14px;

    .product__image {
      width: 100%;
      height: 270px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .product__title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      min-height: 42px;
    }
    .product__price {
      margin-bottom: 20px;
    }
    .product__buy button {
    }
  }

  .hidden {
    display: none;
  }
`;
