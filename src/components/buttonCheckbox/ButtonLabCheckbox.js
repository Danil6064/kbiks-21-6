import "./style.css";
import { Link } from "react-router-dom";

const ButtonLabCheckbox = () => {
  return (
    <Link to="lab" className="button__checkbox">
      <div>
        <p className="button__checkbox__text button__checkbox__lab">
          лабораторні роботи
        </p>
      </div>
    </Link>
  );
};

export default ButtonLabCheckbox;
