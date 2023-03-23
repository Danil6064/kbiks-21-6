import calculateDaysLeft from "./../../calculateDaysLeft";

const PracticalWorksIM = [
  {
    classType: "Практична робота №1",
    textWork:
      "Читати та перекладати Unit 13-A\nTask 2-7 сторінка з 8 по 10\nНа парі ми робили : завдання з 1 по 6 сторінка з 14 по 16)",

    countingDays: calculateDaysLeft("23.02.2023"), // Дата сдачи задания
  },
  {
    classType: "Практична робота №2",
    textWork:
      "Вивчити слова на сторінках 5-6\nЧитати та перекладати Text MAJOR LANGUAGES, сторінка 10\nTask 8 сторінка 10\nTask 10 сторінка 12\nОбрати один із двох текстів які ми з вами читали, та подготувати його переказ\nНа парі ми робили : вправу 7 та 8 на сторінці 17-18",

    countingDays: calculateDaysLeft("02.03.2023"), // Дата сдачи задания
  },
  {
    classType: "Практична робота №3",
    textWork: "Writing (one of topics) сторінка 19\nEx 9,10,11, сторінка 18-19",

    countingDays: calculateDaysLeft("09.03.2023"), // Дата сдачи задания
  },
  {
    classType: "Практична робота №4",
    textWork: "Unit 14А\nТаsк 2-6 (23-24)\nExercise 1-3 (31-32)",

    countingDays: calculateDaysLeft("16.03.2023"), // Дата сдачи задания
  },
  {
    classType: "Практична робота №4",
    textWork: "Unit 14B\nTask 7-10 p 24-26\nExercise 12,13 p 28\nНа парі ми робили :\n14 на сторінці 21\nЗавдання з 1 по 4 сторінка 31)",

    countingDays: calculateDaysLeft("23.03.2023"), // Дата сдачи задания
  },
  
  
, 
];

export { PracticalWorksIM };
