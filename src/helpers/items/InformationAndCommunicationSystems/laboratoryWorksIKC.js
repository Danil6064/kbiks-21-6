import calculateDaysLeft from "./../../calculateDaysLeft";

const LaboratoryWorksIKC = [
   {
     classType: "Лабораторна работа №1",
     textWork: "Потрібно зробити лб№1",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Лабораторна работа №2",
     textWork: "Потрібно зробити лб№2",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Лабораторна работа №3",
     textWork: "Потрібно зробити лб№3",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Лабораторна работа №4",
     textWork: "Потрібно зробити лб№4",
     countingDays: calculateDaysLeft("30.06.2023"), // Дата сдачи задания
   }
];
export { LaboratoryWorksIKC };
