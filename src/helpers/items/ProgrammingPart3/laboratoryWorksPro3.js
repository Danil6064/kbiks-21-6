import calculateDaysLeft from "./../../calculateDaysLeft";

function createHyperlink(url, text = "тут") {
  return `<a href="${url}">${text}</a>`;
}

const LaboratoryWorksPro3 = [
   {
     classType: "Лабораторна работа №1",
     textWork: `Якщо роботу здати до 04.04.2023, то є шанс отримати додатковий бал\nВам потрібно зробити Лабораторну роботу №1. Матеріали за посиланням ${createHyperlink("https://www.google.com/", "Google")}\nЗдати завдання потрібно на дл нуре.`,
     countingDays: calculateDaysLeft("10.06.2023"), // Дата сдачи завдання
   },
];

export { LaboratoryWorksPro3 };
