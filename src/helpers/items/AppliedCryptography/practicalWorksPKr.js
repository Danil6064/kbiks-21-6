import calculateDaysLeft from "./../../calculateDaysLeft";

const pz_1_manual = '<a href="https://drive.google.com/file/d/1nZ1ncyUfQuQHRNDzLZclk9ow8GAZ9OZ5/view?usp=share_link" target="_blank">Завдання (вхідні данні)</a>';

const PracticalWorksPKr = [
   {
     classType: "Практична робота №1",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Зробіть практичну роботу №1, завдання знаходиться за посиланням ${pz_1_manual}` }} />,
     countingDays: calculateDaysLeft("26.03.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №2",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Зробіть практичну роботу №2, завдання знаходиться в класрумі (потрібно виконати три задачи з "Задачі для самостійного розв’язання")` }} />,
     countingDays: calculateDaysLeft("26.03.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksPKr };
