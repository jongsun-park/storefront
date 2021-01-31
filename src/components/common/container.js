import styled, { css } from "styled-components";
import { colors } from "../../styles/theme";

const heroCss = css`
  background-size: cover;
  min-height: calc(100vh - 60px);
  .hero__title {
    font-size: 4rem;
    color: white;
    line-height: 1.2;
    font-weight: bold;
    margin-bottom: 3rem;
  }
`;

const CenterCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CoverCss = css`
  min-height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuoteCss = css`
  .quote-icon {
    max-width: 2rem;
    margin-bottom: 2rem;
  }

  .quote__text {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 1rem;
    color: ${colors.gray};
  }

  .quote__cite {
    position: relative;
    font-size: 12px;
    margin-left: 36px;
    &::after {
      content: "";
      width: 30px;
      border-bottom: 1px solid black;
      position: absolute;
      top: 50%;
      left: -36px;
    }
  }
`;

const quicklinksCss = css`
  p {
    margin-bottom: 10px;
  }
  ul {
    line-height: 1.4;
  }
`;

const newsletterCss = css`
  p {
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 30px 10%;
  background: ${({ background }) => background && background};

  .white {
    color: ${colors.white};
  }

  ${(props) => props.cover && CoverCss}

  .section__title {
    font-size: 2rem;
    margin-bottom: 2rem;
    &.small {
      font-size: 1.5rem;
      line-height: 2rem;
      max-width: 80%;
    }
    &.center {
      text-align: center;
    }
  }

  .section__body {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  &.hero {
    ${heroCss}
    ${CenterCss}
  }

  &.row,
  .row {
    display: flex;
    flex-direction: row;

    .col {
      flex: 1;
      &.content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
    .col + .col {
      margin-left: 20px;
    }
  }

  &.quote {
    ${QuoteCss}
  }

  .quicklinks {
    ${quicklinksCss}
  }

  .newsletter {
    ${newsletterCss}
  }
`;
