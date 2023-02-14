import calculateDaysLeft from "./../../calculateDaysLeft";

const PracticalWorksInfT = [
  {
    classType: "Практична робота №1 (InfT)",
    textWork: "Напишіть есе на 150 слів про своє улюблене хобі.",
    countingDays: calculateDaysLeft("04.01.2022"), // Дата сдачи задания
  },
  {
    classType: "Практична робота №2",
    textWork:
      "Створіть діалог між двома людьми, які обговорюють свої плани на вихідні.",
    countingDays: calculateDaysLeft("10.03.2023"), // Дата сдачи задания
  },
  {
    classType: "Практична робота №3",
    textWork: "Напишіть претензію до компанії про неякісний товар.",
    countingDays: calculateDaysLeft("3.02.2023"), // Дата сдачи задания
  },
  {
    classType: "Практична робота № 4",
    textWork:
      "Прочитайте статтю новин і резюмуйте основні моменти в 5 пропозиціях.",
    countingDays: calculateDaysLeft("15.02.2023"), // Дата сдачи задания
  },
];

export { PracticalWorksInfT };
