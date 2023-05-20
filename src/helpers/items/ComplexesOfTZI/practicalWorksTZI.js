import calculateDaysLeft from "../../calculateDaysLeft";

const PracticalWorksTZI = [
   {
     classType: "Практична робота №2",
     textWork: "Зробити пз№2 та надіслати в класрумі",
     countingDays: calculateDaysLeft("04.05.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №3",
     textWork: "Зробити пз№3 та надіслати в класрумі",
     countingDays: calculateDaysLeft("04.05.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №4",
     textWork: "Зробити пз№4 та надіслати в класрумі",
     countingDays: calculateDaysLeft("15.05.2023"), // Дата сдачи задания
   },
   {
     classType: "Контрольна робота №1",
     textWork: "Потрібно зробити кр№1",
     countingDays: calculateDaysLeft("08.05.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksTZI };
