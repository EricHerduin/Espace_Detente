import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/contact";

export default function Contact() {
  return (
    <div className="mainContact">
      <Header />
      <div className="container__form">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
