import { useShopify } from "../modules/shopify";

const Homepage = () => {
  const { shopDetails } = useShopify();
  return (
    <div>
      <h1>{shopDetails.name}</h1>
    </div>
  );
};

export default Homepage;
