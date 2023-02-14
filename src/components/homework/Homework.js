import "./style.css";
import { useParams } from "react-router-dom";

import { items } from "./../../helpers/itemsList";

const Homework = () => {
  const { id } = useParams();
  const item = items[id];

  console.log(item);
  return (
    <ul className="homework__list">
      {/* <ButtonCheckbox /> */}
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

export default Homework;

//////////////////////////////////////////////////////////////////

// import "./style.css";
// import { useParams } from "react-router-dom";

// import { items } from "./../../helpers/itemsList";

// const Homework = () => {
//   const { id } = useParams();
//   const item = items[id];

//   console.log(item);
//   return (
//     <ul className="homework__list">
//       {item.textWork.map((text, index) => (
//         <li className="homework__card" key={index}>
//           <h2>{item.classType[index]}</h2>
//           <span>{text}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Homework;

/////////////////////////////////////////////////////////////

// const Homework = () => {
//   const { id } = useParams();
//   const item = items[id];

//   console.log(item);
//   return (
//     <li className="homework__card">
//       <h2>{item.classType}</h2>
//       <span>{item.textWork}</span>
//     </li>
//   );
// };

// export default Homework;

//////////////////////////////////////////////////////////////////////

// import "./style.css";
// import { useParams } from "react-router-dom";

// import { items } from "./../../helpers/itemsList";

// const Homework = () => {
//   const { id } = useParams();
//   const item = items.find((i) => i.nameItems === "English");
//   const { classType, textWork } = item;

//   return (
//     <li className="homework__card">
//       <h2>{classType[id]}</h2>
//       <span>{textWork[id]}</span>
//     </li>
//   );
// };

// export default Homework;
