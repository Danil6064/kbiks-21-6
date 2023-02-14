import { NavLink } from "react-router-dom";
import "./style.css";

const SubjectComp = ({ name, index }) => {
  return (
    <NavLink to={`/subject/${index}`} className="item__card">
      <li>
        <span>{name}</span>
      </li>
    </NavLink>
  );
};

export default SubjectComp;
