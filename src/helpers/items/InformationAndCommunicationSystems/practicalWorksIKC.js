import calculateDaysLeft from "./../../calculateDaysLeft";

const PracticalWorksIKC = [
   {
     classType: "Практична робота №1",
     textWork: "Потрібно зробити ПЗ№1",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №2",
     textWork: "Потрібно зробити ПЗ№2",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   },
     {
     classType: "Практична робота №3",
     textWork: "Потрібно зробити ПЗ№3",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №4",
     textWork: "Потрібно зробити ПЗ№4",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksIKC };
