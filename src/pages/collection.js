import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { client } from "../modules/shopify";
import { Container } from "../components/common/container";

const Product = ({ product }) => {
  const { title, id, images, variants } = product;
  const { altText, src } = images[0];
  const { price } = variants[0];

  return (
    <ProductContainer className="product">
      <div className="product--image">
        <img alt={altText} src={src} />
      </div>
      <div className="product--info">
        <h3 className="product--title">{title}</h3>
        <p className="product--price">€ {price}</p>
        <a className="product--button" href={`/product/${id}`}>
          Details
        </a>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  border: 1px solid #eee;
  display: inline-block;
  margin: 0 1% 20px 0;
  padding: 10px;
  width: 29%;
  background: #fff;
  transition: all ease-out 300ms;
  position: relative;
  top: 0;

  .product--image {
    height: 0;
    padding-top: 100%;
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .product--title {
    font-size: 1.2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  .product--button {
    display: block;
    background: #333;
    color: #fff;
    padding: 10px 20px;
    margin: 1rem 0 0;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:hover {
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.1);
    top: -10px;
  }
`;

const Collection = () => {
  let { collectionId } = useParams();
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    client.collection
      .fetchWithProducts(collectionId, { productsFirst: 10 })
      .then((collection) => {
        setCollection(collection);
      });
  }, [collectionId]);
  //   console.log(collectionId);

  const { description, image, products, title } = collection;
  return (
    <CollectionContainer className="collection--container">
      <header className="collection--header">
        <div className="collection--header__image">
          {image && <img src={image.src} alt={image.altText} />}
        </div>
        <div className="collection--header__content">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="lightgray">{products ? products.length : 0} items</p>
        </div>
      </header>

      <div className="products">
        {products &&
          products.map((product) => {
            return <Product product={product} key={product.title} />;
          })}
      </div>
    </CollectionContainer>
  );
};

export default Collection;

const CollectionContainer = styled(Container)`
  header {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 2rem;
  }
  .collection--header__image {
    min-width: 50%;
    img {
      max-width: 80%;
    }
  }

  .collection--header__content {
    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }

  .products {
    display: flex;
    flex-wrap: wrap;
  }
`;
