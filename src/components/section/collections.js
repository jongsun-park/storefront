import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Pagination } from "../common/pagination";

import { client } from "../../modules/shopify";
import { media, colors } from "../../styles/theme";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    client.collection.fetchAllWithProducts().then((res) => {
      setCollections(res);
    });
  }, []);

  const Brand = ({ collection, hidden }) => {
    const { title, id, image, products } = collection;
    const { altText, id: imageId, src } = image
      ? image
      : { altText: "", id: "", src: "" };

    // if collections is empty or don't have image -> not show
    // if (products.length === 0 || image.src === "") {
    //   return "";
    // }

    return (
      <div
        key={id}
        className={`collection--container ${hidden ? "hidden" : ""}`}
      >
        <a href={`/collection/${id}`} className="collection--link">
          <div className="collection--image__container">
            {src ? (
              <img
                alt={altText ? altText : imageId}
                src={src}
                className="collection--image"
              />
            ) : (
              <p>NO IMAGE</p>
            )}
          </div>
          <p className="collection--title">
            <span>{title}</span> ({products.length} items)
          </p>
        </a>
      </div>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const perPage = 4;
  const maxItems = collections.length;

  return (
    <CollectionContainer>
      <h2 className="section__title center">Collections</h2>
      <div className="collections">
        {collections.map((collection, index) => (
          <Brand
            key={collection.id}
            collection={collection}
            hidden={
              activeIndex <= index && index < activeIndex + perPage
                ? false
                : true
            }
          />
        ))}
      </div>
      <Pagination
        index={activeIndex}
        setIndex={setActiveIndex}
        perPage={perPage}
        maxItems={maxItems}
      />
    </CollectionContainer>
  );
};

export default Collections;

const CollectionResponsive = css`
  @media (max-width: ${media.l}) {
    // background: teal;
  }
  @media (max-width: ${media.m}) {
    // background: orange;
    max-width: 100%;
    .section__title.center {
      text-align: left;
    }
    .collection--container {
      width: 49%;
    }
  }
  @media (max-width: ${media.s}) {
    // background: navy;
    .collection--container {
      width: 100%;
    }
  }
`;

const CollectionContainer = styled.section`
  position: relative;
  .collections {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .collection--container {
    width: 24%;
    min-height: 240px;
    border: 1px solid #eee;
    margin-bottom: 20px;

    &.hidden {
      display: none;
    }
  }

  .collection--link {
    display: inline-block;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;

    .collection--title {
      position: absolute;
      width: 100%;
      height: 30px;
      top: calc(100% - 30px);

      text-align: center;
      background: #eee;
      padding: 10px;
      border: 1px solid #ccc;
      color: #333;
      font-size: 10px;
      transition: all ease-out 300ms;
      span {
        font-weight: bold;
      }
    }

    &:hover {
      .collection--title {
        height: 100%;
        top: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${colors.primary};
        color: white;

        font-size: 1.4rem;
        flex-direction: column;

        span {
          margin: 0 1px;
        }
      }
    }
  }

  .collection--image__container {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    img {
      max-height: 40%;
      max-width: 80%;
    }
  }

  ${CollectionResponsive}
`;
