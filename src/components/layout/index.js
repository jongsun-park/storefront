import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import styled, { css } from "styled-components";

import { Container } from "../common/container";
import { useShopify } from "../../modules/shopify";

import CartButton from "../cart/button";

import { media } from "../../styles/theme";

const routes = [
  { name: "homepage", path: "/" },
  { name: "blogs", path: "/blogs", disabled: true },
  { name: "projects", path: "/projects", disabled: true },
  { name: "products", path: "/products" },
];

const Naviagtion = () => {
  useEffect(() => {
    const disabled = document.querySelectorAll(".disabled");
    // console.log(disabled);
    disabled.forEach((element) => {
      element.addEventListener("click", (e) => e.preventDefault());
    });
  }, []);

  return (
    <>
      <nav className="header__navigation">
        {routes.map(({ name, path, disabled }) => (
          <NavLink
            to={path}
            key={name}
            exact
            activeClassName="selected"
            className={`${disabled ? "disabled" : ""}`}
          >
            {name}
          </NavLink>
        ))}
      </nav>
      <CartButton />
    </>
  );
};

const Header = () => {
  const { shopDetails } = useShopify();
  const shopname = shopDetails.name;

  return (
    <header>
      <FlatContainer>
        <h1 className="header__logo">
          <NavLink to="/">{shopname}</NavLink>
        </h1>
        <Naviagtion className="header__navigation" />
      </FlatContainer>
    </header>
  );
};

const Footer = () => {
  const { shopDetails } = useShopify();
  const shopname = shopDetails.name;
  const year = new Date().getFullYear();
  return (
    <FlatContainer>
      <footer>
        © {year}, {shopname}
      </footer>
    </FlatContainer>
  );
};

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

const NavigationResponsive = css`
  @media (max-width: ${media.m}) {
    // background: orange;
    .header__navigation {
      display: none;
      min-width: 320px;
    }
  }

  @media (max-width: ${media.s}) {
    button span {
      display: none;
    }
  }
`;

const FlatContainer = styled(Container)`
  padding: 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header__logo {
    text-transform: uppercase;
    font-weight: 700;
  }

  .header__navigation {
    a {
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
    }
    a + a {
      margin-left: 20px;
    }

    .selected {
      border-bottom: 1px solid black;
      padding-bottom: 4px;
    }

    .disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  ${NavigationResponsive}
`;
