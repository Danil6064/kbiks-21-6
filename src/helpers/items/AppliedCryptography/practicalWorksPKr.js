import calculateDaysLeft from "./../../calculateDaysLeft";

const lb_1_manual = '<a href="https://drive.google.com/file/d/1nZ1ncyUfQuQHRNDzLZclk9ow8GAZ9OZ5/view?usp=share_link" target="_blank">Завдання (вхідні данні)</a>';

const PracticalWorksPKr = [
   {
     classType: "Практична робота №1",
     textWork: <div dangerouslySetInnerHTML={{ __html:Зробіть практичну роботу №1, завдання знаходиться за посиланням` ${lb_1_manual}` }} />,
     countingDays: calculateDaysLeft("26.03.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksPKr };
