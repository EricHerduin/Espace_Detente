import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="footer__adress--mail"
      to="#"
      onClick={(e) => {
        window.open("mailto:" + mailto);
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
