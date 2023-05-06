import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductRender from "../components/productDescription";

export default function Product() {
  window.scrollTo(0, 0);
  return (
    <div className="mainProduct">
      <Header />
      <ProductRender />
      <Footer />
    </div>
  );
}
