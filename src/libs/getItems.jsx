import data from "../data/data.json";
import avantage from "../data/avantages.json";

export default function getItems() {
  return data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image: item.image,
      fabricant: item.fabricant,
    };
  });
}

export const getItem = (id) => {
  return data.find((item) => {
    return item.title === id;
  });
};

export function getProduct(id) {
  return data
    .find((item) => {
      return item.id === id;
    })
    .map((data) => {
      return data.modele;
    });
}

export function getAvantages() {
  return avantage.map((item) => {
    return {
      name: item.name,
      image: item.image,
      description: item.description,
    };
  });
}
