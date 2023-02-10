import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            {/* our-domain.com/welcome => Welcome Component */}
            <Welcome />
          </Route>
          <Route path="/products" exact>
            {/* our-domain.com/products => Products Component */}
            <Products />
          </Route>
          <Route path="/products/:productId">
            {/* our-domain.com/product-detail/<any value> => Product-Detail Component */}
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
