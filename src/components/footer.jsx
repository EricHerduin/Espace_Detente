import logo from "../assets/LogoEspaceDetenteWhite.png";

import ButtonMailto from "../libs/mailto";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={logo} alt="Espace Détente Reims" />
      </div>
      <div className="footer__adress">
        <p>10 rue de l'industrie</p>
        <p>51350 Cormontreuil</p>
        <div className="footer__adress--contact">
          <i className="fa-solid fa-phone-flip"></i>
          <p>06.22.17.46.96</p>
        </div>
        <div className="footer__adress--contact">
          <i className="fa-solid fa-envelope"></i>
          <ButtonMailto
            label="  contact@espacedetentereims.fr"
            mailto="contact@espacedetentereims.fr"
          />
        </div>
      </div>
      <div className="footer__network">
        <p>Retrouvez nous sur nos réseaux sociaux</p>
        <a href="https://www.facebook.com/EspaceDetenteReims" target="blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/espace_detente_reims/"
          target="blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
