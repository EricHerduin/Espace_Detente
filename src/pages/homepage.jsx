import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import Description from "../components/description";
import Productlist from "../components/productList";
import ArticleText from "../components/article";
import "../css/style.css";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="mainHome">
        <div className="mainHome__text">
          <Image />
          <div className="mainHome__text--corps">
            <Description />
            <Productlist />
            <ArticleText />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
