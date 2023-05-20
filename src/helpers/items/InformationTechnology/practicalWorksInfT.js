import calculateDaysLeft from "./../../calculateDaysLeft";

const PracticalWorksInfT = [
   {
     classType: "Практична робота №1",
     textWork: "Потрібно зробити пз№1, завдання знаходиться на дл нуре",
     countingDays: calculateDaysLeft("11.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №2",
     textWork: "Потрібно зробити пз№2, завдання знаходиться на дл нуре",
     countingDays: calculateDaysLeft("11.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №3",
     textWork: "Потрібно зробити пз№3, завдання знаходиться на дл нуре",
     countingDays: calculateDaysLeft("11.06.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksInfT };
