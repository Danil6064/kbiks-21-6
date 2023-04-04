import calculateDaysLeft from "../../calculateDaysLeft";

const lb_1_manual_1 = '<a href="https://docs.google.com/document/d/1yVBbmuvPucuMpA1A6qu3XKvgZbZRrGaT/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank">Завдання (вхідні данні)</a>';
const lb_1_manual_2 = '<a href="https://docs.google.com/document/d/1hEappZfA0TJ1KzK58phqKD42jvBO9eQ5/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank">Лабораторна робота № 1</a>';
const lb_1_application_1 = '<a href="https://docs.google.com/document/d/1FnZnROXhPJwSpe3Yflv8gnl-i5IuOblL/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank">Приклад №1</a>';
const lb_1_application_2 = '<a href="https://docs.google.com/document/d/17RzB7eyMw1ppMBYTIqsiAU08dlLnEarh/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank">Приклад №2</a>';
const lb_1_application_3 = '<a href="https://docs.google.com/document/d/1FnZnROXhPJwSpe3Yflv8gnl-i5IuOblL/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank">Оформлення роботи</a>';
const lb_1_application_4 = '<a href="https://docs.google.com/document/d/1I3oxdPSGNicPAIU4LuQOjzyNHikyasxB/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank">3_Досл_АФ_А5ред</a>';


const LaboratoryWorksTZI = [
   {
     classType: "Лабораторна работа №1",
     textWork:  <div dangerouslySetInnerHTML={{ __html: ` Розміщувати робочі файли в класрумі строго у форматі .pdf.
Найменування файлу - "Лб_№* або ПЗ_№*_Прізвище виконавця_код групи (21_* або у22_1)".
Файли із зауваженнями не видаляти.
Лабораторні роботи оцінюються за 7-бальною системою, практичні заняття - за 3-бальною системою. Максімальна оцінка - 40 балів.\n${lb_1_manual_1}\n${lb_1_manual_2}\n${lb_1_application_1}\n${lb_1_application_2}\n${lb_1_application_3}\n${lb_1_application_4}\nЗауваження для усіх:
1. Треба привести данні розрахунків у таблицях (дивитись Приклад_2).
2. Графік будувати по точкам. У методичці 11 значень (11 точек).` }} />,
     countingDays: calculateDaysLeft("10.04.2023"), // Дата сдачи задания
   },
];

export { LaboratoryWorksTZI };
