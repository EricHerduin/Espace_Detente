import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsPage from "../components/news";

export default function News() {
  return (
    <div className="mainHome">
      <Header />
      <NewsPage />
      <Footer />
    </div>
  );
}
