import React from "react";

import { Link, useParams } from "react-router-dom";
import { Dropdown } from "./dropdown";

import Slider from "./carousel";

import Avantage from "../components/avantage";

function Title({ data }) {
  return (
    <div className="container__prez--title">
      <h1>{data}</h1>
    </div>
  );
}

function Model({ data }) {
  const url = useParams();
  return (
    <div className="container__prez--model">
      {data.map((item) => {
        return (
          <li className="container__prez--list" key={item.modeleid}>
            <Link to={`/product/${url.id}/${item.modeleid}`}>
              <h2>{item.name}</h2>
            </Link>
            <p>{item.nbplace} Places</p>
          </li>
        );
      })}
    </div>
  );
}

export default function Modelprez({ data, model }) {
  const params = useParams();
  console.log(params.modelid);
  const onemodel = model.find((item) => {
    return item.modeleid === params.modelid;
  });

  console.log(params.id);

  return (
    <div className="container__prez">
      <Title data={data.title} />
      <Avantage data={data} manufacturer="Softub" />
      <Model data={model} id={data.title} />
      <div className="container__prez--model-choice">
        <div className="container__prez--image">
          <Slider data={onemodel} />
        </div>

        <div className="container__prez--text">{onemodel.text}</div>
      </div>
      <Dropdown
        description={onemodel.features}
        title="Caractéristiques techniques"
        data={onemodel.features}
      />
    </div>
  );
}
