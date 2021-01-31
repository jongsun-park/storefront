import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../common/container";
import { useShopify } from "../../modules/shopify";

const routes = [
  { name: "homepage", path: "/" },
  { name: "blogs", path: "/blogs" },
  { name: "products", path: "/products" },
];

const Cart = () => {
  const { cartCount } = useShopify();
  return (
    <NavLink to="/cart" activeClassName="selected">
      Cart {cartCount}
    </NavLink>
  );
};

const Naviagtion = () => {
  return (
    <nav className="header__navigation">
      {routes.map(({ name, path }) => (
        <NavLink to={path} key={name} exact activeClassName="selected">
          {name}
        </NavLink>
      ))}
      <Cart />
    </nav>
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
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

const FlatContainer = styled(Container)`
  padding: 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
      margin-left: 10px;
    }

    .selected {
      border-bottom: 1px solid black;
      padding-bottom: 4px;
    }
  }
`;
