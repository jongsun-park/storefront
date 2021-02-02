import styled from "styled-components";
import { media } from "../../styles/theme";

export const Pagination = ({ index, setIndex, perPage, maxItems }) => {
  const nextHandler = () => {
    setIndex(index + perPage);
  };
  const preivousHandler = () => {
    setIndex(index - perPage);
  };

  return (
    <PaginationContainer>
      <button
        className="previous-button"
        disabled={index < perPage ? true : false}
        onClick={preivousHandler}
      >
        Previous
      </button>
      <button
        className="next-button"
        disabled={index + perPage < maxItems ? false : true}
        onClick={nextHandler}
      >
        Next
      </button>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: ${media.s}) {
    button,
    input {
      padding: 10px 10px;
    }
  }
`;
