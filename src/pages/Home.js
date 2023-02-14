import SubjectComp from "../components/home/SubjectComp";
import { subjects } from "../helpers/subjectsList";

const Home = () => {
  return (
    <ul className="home__subjectList">
      {subjects.map((subject) => {
        return (
          <SubjectComp
            key={subject.id}
            name={subject.name}
            index={subject.id}
          />
        );
      })}
    </ul>
  );
};

export default Home;
