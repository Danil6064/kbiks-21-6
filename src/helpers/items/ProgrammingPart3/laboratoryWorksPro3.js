const LaboratoryWorksPro3 = [
   {
     classType: "Лабораторна работа №1",
     textWork: `Якщо роботу здати до 04.04.2023 то є шанс отримати доп. бал\nВам потрбно зробти Лабораторну роботу №1, матеріали за посиланням - <a href="https://drive.google.com/file/d/1QfIt_HGDbFxyWkKeHnE0NVqv4uyyWJ-f/view?usp=share_link">тут</a>\nЗдати завдання потрібно на дл нуре`,
     countingDays: calculateDaysLeft("10.06.2023"), // Дата сдачи задания
   },
];

function renderTextWork(textWork) {
  return {__html: textWork};
}

function App() {
  return (
    <div>
      {LaboratoryWorksPro3.map((item, index) => (
        <div key={index}>
          <h2>{item.classType}</h2>
          <p dangerouslySetInnerHTML={renderTextWork(item.textWork)} />
          <p>{item.countingDays} днів до дедлайну</p>
        </div>
      ))}
    </div>
  );
}

export default App;
