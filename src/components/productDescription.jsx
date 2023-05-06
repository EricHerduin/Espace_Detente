import React from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../libs/getItems";

import Modelprez from "../libs/productGallery";

export default function ProductRender() {
  const params = useParams();
  const data = getItem(params.id);
  const model = getItem(params.id).modele;
  console.log(model.length);
  console.log(data);
  console.log(model);

  return (
    <div className="container__head">
      <Modelprez data={data} model={model} />
    </div>
  );
}
