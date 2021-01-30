import { Link } from "react-router-dom";

const routes = [
  { name: "homepage", path: "/" },
  { name: "blogs", path: "/blogs" },
  { name: "products", path: "/products" },
  { name: "cart", path: "/cart" },
];

const Naviagtion = () => (
  <nav>
    {routes.map(({ name, path }) => (
      <Link to={path} key={name}>
        {name}
      </Link>
    ))}
  </nav>
);

const Layout = ({ children }) => (
  <div>
    <header>
      <Naviagtion />
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
