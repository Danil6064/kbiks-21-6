// import "./style.css";
import { useParams } from "react-router-dom";

import { items } from "./itemsList";

const HomeworkPz = () => {
  const { id } = useParams();
  const item = items[id];

  console.log(item);
  return (
    <ul className="homework__list">
      {item.textWork.map((text, index) => (
        <li className="homework__card" key={index}>
          <h2>{item.classType[index]}</h2>
          <div className="homework__quest-date">
            <span>{text}</span>
            <div className="line"></div>
            <div className="homework__date">
              <p>{item.countingDays[index]}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeworkPz;
