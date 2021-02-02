import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
// import { useSelector } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";

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
import Collection from "./pages/collection";

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

  // const appState = useSelector((state) => state);

  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Layout>
          <Switch location={location}>
            <Route path="/" exact component={Homepage} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/blog/:slug" component={Blog} />
            <Route path="/products" component={Products} />
            <Route path="/product/:slug" component={Product} />
            <Route path="/collection/:collectionId" component={Collection} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Layout>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
