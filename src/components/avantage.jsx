import React from "react";
import { getAvantages } from "../libs/getItems";
import { useState } from "react";

function AvantageText(props) {
  return <p>{props.description}</p>;
}
function AvantageList(props) {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  console.log(isHidden);
  return (
    <div className="avantage-card" onClick={handleClick}>
      <div className="avantage-card_main">
        <div className="avantage-background-icone">
          <img src={props.image} alt={props.image} className="avantage-icone" />
        </div>
        <h3 className="avantage-title">{props.name}</h3>
      </div>

      {/* <div className={`avantage-description ${isHidden ? "hide" : ""}`}>
        <AvantageText description={props.description} />
      </div> */}
    </div>
  );
}

function Avantage({ data, manufacturer }) {
  const hasManufacturer = [data].some((item) => {
    return item.fabricant === manufacturer;
  });
  const [selected, setSelected] = useState(-1);
  const [isHidden, setIsHidden] = useState(false);
  const handleTitleClick = (index) => {
    setSelected(selected === index ? -1 : index);
    if (selected !== -1) {
      setIsHidden(isHidden);
    }
  };

  const avantages = getAvantages();
  console.log({ hasManufacturer, manufacturer });
  console.log(selected);
  console.log(selected !== -1 ? avantages[selected].description : null);
  if (hasManufacturer) {
    return (
      <div className="avantage">
        <h2>Les Avantages des spas Softub</h2>
        <div>
          <div className="avantage_container">
            {avantages.map((item, index) => (
              <div
                className="avantage-card"
                key={index}
                onClick={() => handleTitleClick(index)}
              >
                <div className="avantage-background-icone">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="avantage-icone"
                  />
                </div>
                <div className="avantage-title">
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`avantage-description${selected !== -1 ? "-hide" : ""}`}
          >
            {selected !== -1 ? (
              <p className={`avantage-text${selected !== -1 ? "-hide" : ""}`}>
                {avantages[selected].description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Avantage;
