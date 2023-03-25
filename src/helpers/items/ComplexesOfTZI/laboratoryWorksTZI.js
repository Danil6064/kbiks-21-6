import calculateDaysLeft from "../../calculateDaysLeft";

const LaboratoryWorksTZI = [
   {
     classType: "Лабораторна работа №1",
     textWork: "Всі необхідні матеріали знаходяться в класрумі",
     countingDays: calculateDaysLeft("10.04.2023"), // Дата сдачи задания
   },
];

export { LaboratoryWorksTZI };
