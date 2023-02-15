import "./style.css";

import { useLocation, Link } from "react-router-dom";

const ButtonCheckbox = () => {
  const { pathname } = useLocation();
  return (
    <div className="buttons__checkbox ">
      <Link
        to="lab"
        className={`button__checkbox ${
          pathname.includes("/lab") ? "button__checkbox--active" : ""
        }`}
      >
        <div>
          <p className="button__checkbox__text button__checkbox__lab">
            лабораторні роботи
          </p>
        </div>
      </Link>

      <Link
        to="all"
        className={`button__checkbox__all ${
          pathname.includes("/all") ||
          pathname === "/subject/0" ||
          pathname === "/subject/1" ||
          pathname === "/subject/2" ||
          pathname === "/subject/3" ||
          pathname === "/subject/4" ||
          pathname === "/subject/5" ||
          pathname === "/subject/6" ||
          pathname === "/subject/7"
            ? "button__checkbox--active"
            : ""
        }`}
      >
        <div>
          <p className="button__checkbox__text ">всі</p>
        </div>
      </Link>

      <Link
        to="pz"
        className={`button__checkbox ${
          pathname.includes("/pz") ? "button__checkbox--active" : ""
        }`}
      >
        <div>
          <p className="button__checkbox__text button__checkbox__practical">
            практичні роботи
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ButtonCheckbox;
