import styled, { css } from "styled-components";
import { colors, media } from "../../styles/theme";

export const Responsive = css`
  @media (max-width: ${media.l}) {
    background: teal;
  }
  @media (max-width: ${media.m}) {
    background: orange;
  }
  @media (max-width: ${media.s}) {
    background: navy;
  }
`;

const RowResponsive = css`
  @media (max-width: ${media.l}) {
    // background: teal;
  }
  @media (max-width: ${media.m}) {
    // background: orange;
    flex-direction: column;
    .col + .col {
      margin-top: 20px;
      margin-left: 0;
      .quote-icon {
        margin-bottom: 10px;
      }
    }
  }
  @media (max-width: ${media.s}) {
    // background: navy;
  }
`;

const heroCssResponsive = css`
  @media (max-width: ${media.l}) {
    // background: teal;
  }
  @media (max-width: ${media.m}) {
    // background: orange;
    align-items: flex-start;
    text-align: left;
    padding-right: 10%;
    .hero__title {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: ${media.s}) {
    // background: navy;

    .hero__title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

const heroCss = css`
  background-size: cover;
  min-height: calc(90vh - 60px);

  .hero__title {
    font-size: 4rem;
    color: white;
    max-width: 80%;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  ${heroCssResponsive}
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

  @media (max-width: ${media.l}) {
    // background: teal;
  }
  @media (max-width: ${media.m}) {
    // background: orange;
    .quote-icon {
      margin-bottom: 10px;
    }
    .col {
      margin-bottom: 40px;
    }
    .quote__text {
      max-width: 80%;
    }
  }
  @media (max-width: ${media.s}) {
    // background: navy;
    .col {
      margin-bottom: 20px;
    }
    .quote__text {
      max-width: 90%;
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
  input:focus + button {
    background: ${colors.primary};
  }
`;

const fullwidthCss = css`
  max-height: 60vh;
  min-height: 500px;
  min-width: 100vw;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 20px;
  background: ${({ background }) => background && background};

  ${(props) => props.cover && CoverCss}

  ${(props) => props.fullwidth && fullwidthCss}

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

      .footer--col__heading {
        font-weight: bold;
      }
    }
    .col + .col {
      margin-left: 20px;
    }

    ${RowResponsive}
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
