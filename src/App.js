import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// shpoify
import { useShopify } from "./modules/shopify";

// views
import Layout from "./components/layout";
import Homepage from "./pages/homepage";
import Cart from "./pages/cart";
import Blogs from "./pages/blogs";
import Blog from "./pages/blog";
import Products from "./pages/products";
import Product from "./pages/product";

const App = () => {
  const {
    createShop,
    createCheckout,
    fetchProducts,
    // fetchCollection,
  } = useShopify();

  useEffect(() => {
    createShop();
    fetchProducts();
    createCheckout();
    // fetchCollection()
  }, []);

  const appState = useSelector((state) => state);

  console.log(appState);

  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" exact component={Homepage} />
          {/* <Route path="/blogs" component={Blogs} />
          <Route path="/blog/:slug" component={Blog} /> */}
          <Route path="/products" component={Products} />
          <Route path="/product/:slug" component={Product} />
          <Route path="/cart" component={Cart} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
