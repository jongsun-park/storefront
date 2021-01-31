import styled from "styled-components";

export const Image = ({ url, className }) => (
  <ImageContainer
    url={url}
    className={`image-container ${className}`}
  ></ImageContainer>
);

const ImageContainer = styled.div`
  background: ${({ url }) => url && `url(${url})`};
  height: 100%;
  background-size: cover;
  min-height: 400px;
  background-position: bottom;

  &.col-3,
  &.col-4 {
    padding-top: 100%;
    height: unset;
    min-height: unset;
    margin-bottom: 1rem;
  }
`;
