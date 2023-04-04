import calculateDaysLeft from "../../calculateDaysLeft";

const lb_1_manual_1 = '<a href="https://classroom.google.com/c/NjAwNjQ1MjU2MTI3/a/NjAwNjQ2MzY4OTkx/details" target="_blank">Завдання (вхідні данні)</a>';
const lb_1_manual_2 = '<a href="https://classroom.google.com/c/NjAwNjQ1MjU2MTI3/a/NjAwNjQ2MzY4OTkx/details" target="_blank">Лабораторна робота № 1</a>';
const lb_1_application_1 = '<a href="https://classroom.google.com/c/NjAwNjQ1MjU2MTI3/a/NjAwNjQ2MzY4OTkx/details" target="_blank">Приклад №1</a>';
const lb_1_application_2 = '<a href="https://classroom.google.com/c/NjAwNjQ1MjU2MTI3/a/NjAwNjQ2MzY4OTkx/details" target="_blank">Приклад №2</a>';
const lb_1_application_2 = '<a href="https://classroom.google.com/c/NjAwNjQ1MjU2MTI3/a/NjAwNjQ2MzY4OTkx/details" target="_blank">Приклад №2</a>';

const LaboratoryWorksTZI = [
   {
     classType: "Лабораторна работа №1",
     textWork:  <div dangerouslySetInnerHTML={{ __html: ` Розміщувати робочі файли в класрумі строго у форматі .pdf.
Найменування файлу - "Лб_№* або ПЗ_№*_Прізвище виконавця_код групи (21_* або у22_1)".
Файли із зауваженнями не видаляти.
Лабораторні роботи оцінюються за 7-бальною системою, практичні заняття - за 3-бальною системою. Максімальна оцінка - 40 балів.\n${lb_1_manual_1}\n${lb_1_manual_2}\n${lb_1_manual_1}\n${lb_1_application_1}\n${lb_1_application_1}` }} />,
     countingDays: calculateDaysLeft("10.04.2023"), // Дата сдачи задания
   },
];

export { LaboratoryWorksTZI };
