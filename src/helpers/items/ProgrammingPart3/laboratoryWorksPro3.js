import calculateDaysLeft from "./../../calculateDaysLeft";
const link = '<a href="https://www.google.com" target="_blank">Google</a>';

const LaboratoryWorksPro3 = [
   {
     classType: "Лабораторна работа №1",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Якщо роботу здати до 04.04.2023, то є шанс отримати додатковий бал\nВам потрібно зробити Лабораторну роботу №1. Матеріали за посиланням ${link}\nЗдати завдання потрібно на дл нуре.` }} />,
     countingDays: calculateDaysLeft("10.06.2023"), // Дата сдачі завдання
   },
];

export { LaboratoryWorksPro3 };

