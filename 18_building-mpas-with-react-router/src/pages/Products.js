import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/Product1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/Product2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/Product3">Product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
