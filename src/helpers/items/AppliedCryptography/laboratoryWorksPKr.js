import calculateDaysLeft from "./../../calculateDaysLeft";

const lb_1_manual = '<a href="https://drive.google.com/file/d/114VnnaQ-x0m-YuStQqW7QMJe7GDB62lK/view?usp=share_link" target="_blank">Методичка</a>';
const lb_1_manual_2 = '<a href="https://drive.google.com/file/d/1meqytVjG19ln7Qru1p5LHPk9EwSWzxdm/view?usp=share_link" target="_blank">Книга</a>';

const LaboratoryWorksPKr = [
   {
     classType: "Лабораторна работа №1",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Зробити лб№1 за посиланням, також є книга, яка може допомогти з завданням ${lb_1_manual} + \n${lb_1_manual_2}` }} />,

     countingDays: calculateDaysLeft("31.05.2023"), // Дата сдачи задания
   },
];

export { LaboratoryWorksPKr };
