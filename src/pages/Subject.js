import { useLocation, Route, Routes, Outlet } from "react-router-dom";
import Homework from "../components/homework/Homework";
import HomeworkLab from "../components/btnCheckboxLab/HomeworkLab";
import HomeworkPz from "../components/btnCheckboxPz/HomeworkPz";
import ButtonCheckbox from "../components/buttonCheckbox/ButtonCheckbox";
import NamePlate from "../components/namePlate/NamePlate";

const Project = () => {
  const { pathname } = useLocation();

  return (
    <>
      <NamePlate />
      <ButtonCheckbox />
      <div>
        <Routes>
          <Route path="" element={<Homework />} />
          <Route path="all" element={<Homework />} />
          <Route path="lab" element={<HomeworkLab />} />
          <Route path="pz" element={<HomeworkPz />} />
        </Routes>
        {pathname !== "/lab" && <Outlet />}
      </div>
    </>
  );
};

export default Project;

// import HomeworkLab from "../components/btnCheckboxLab/HomeworkLab";
// import Homework from "../components/homework/Homework";

// const Project = () => {
//   return (
//     <>
//       <Homework />
//       <HomeworkLab />
//     </>
//   );
// };

// export default Project;
