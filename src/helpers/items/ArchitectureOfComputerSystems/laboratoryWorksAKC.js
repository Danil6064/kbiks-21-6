import calculateDaysLeft from "./../../calculateDaysLeft";

const LaboratoryWorksAKC = [
   {
     classType: "Лабораторна работа №1 (AKC)",
     textWork: "Для допуску к ЛБ№1 вам потрібно зробити 3 задачі за номером своєї бригади (самі задачи знаходяться : Корисні файли -> АКС_02_AVR_2_.doc)",
     countingDays: calculateDaysLeft("18.04.2023"), // Дата сдачи задания
   },
];

export { LaboratoryWorksAKC };
