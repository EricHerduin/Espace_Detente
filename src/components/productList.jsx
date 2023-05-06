import getItems from "../libs/getItems";
import { Link } from "react-router-dom";

export default function Productlist() {
  const products = getItems();
  console.log(products);
  return (
    <div className="container__product">
      <h2>Découvrez notre gamme de spas et bains nordiques haut de gamme</h2>
      <div className="container__product--gallery">
        {products.map((item) => (
          <div className="gallery__card" key={item.id}>
            <Link to={"/product/" + item.title + "/1"}>
              <div
                className="gallery__card--img"
                //style={{ backgroundImage: "url(" + item.image + ")" }}
              >
                <img src={item.image} alt="" className="gallery__card--img" />
              </div>
              <h3>{item.title + " " + item.fabricant}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
