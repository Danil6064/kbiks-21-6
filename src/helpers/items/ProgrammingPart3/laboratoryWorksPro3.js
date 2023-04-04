import calculateDaysLeft from "./../../calculateDaysLeft";

// Оголошення зовнішньої змінної з гіперпосиланням Google
const googleLink = '<a href="https://www.google.com/">Google</a>';

const LaboratoryWorksPro3 = [
   {
     classType: "Лабораторна работа №1",
     textWork: "Якщо роботу здати до 04.04.2023, то є шанс отримати додатковий бал\nВам потрібно зробити Лабораторну роботу №1. Матеріали за посиланням ${googleLink}\nЗдати завдання потрібно на дл нуре.",
     countingDays: calculateDaysLeft("10.06.2023"), // Дата сдачі завдання
   },
];

export { LaboratoryWorksPro3 };
