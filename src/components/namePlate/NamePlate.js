import { items } from "./../../helpers/itemsList";
import { useParams } from "react-router-dom";

import "./style.css";

const NamePlate = () => {
  const { id } = useParams();
  const item = items[id];

  console.log(item);
  return <div className="namePlate">{item.nameItems}</div>;
};

export default NamePlate;
