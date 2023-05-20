import calculateDaysLeft from "./../../calculateDaysLeft";

const PracticalWorksPro3 = [
   {
     classType: "Тестова робота №1",
     textWork: "Вам потрібно зробити тест",
     countingDays: calculateDaysLeft("12.04.2023"), // Дата сдачи задания
   },
   {
     classType: "Тестова робота №2",
     textWork: "Вам потрібно зробити тест",
     countingDays: calculateDaysLeft("27.05.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksPro3 };
