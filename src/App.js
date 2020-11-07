import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Education from "./pages/Education";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetailse";
import Products from "./pages/Products";
import Resgister from "./pages/Register";
import ShoppingCart from "./pages/ShoppingCart";
import Why from "./pages/Why";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
    <ToastContainer />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Resgister} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/1" component={ProductDetails} />
        <Route path="/education" component={Education} />
        <Route path="/blog" component={Blog} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/why" component={Why} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        {/* <Route path='/' component={Home}/> */}
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
