import calculateDaysLeft from "./../../calculateDaysLeft";

const LaboratoryWorksInfT = [
   {
     classType: "Лабораторна работа №1",
     textWork: "Всі потрібні матеріали знаходяться на дл нуре. Спочатку оберіть свою бригаду в гугл таблицях, а вже потім переходьте до виконаня ЛБ №1",
     countingDays: calculateDaysLeft("11.06.2023"), // Дата сдачи задания
   },
];

export { LaboratoryWorksInfT };
