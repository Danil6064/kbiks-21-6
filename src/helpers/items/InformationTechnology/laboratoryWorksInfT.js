import calculateDaysLeft from "./../../calculateDaysLeft";

const lb_1_manual = '<a href="https://drive.google.com/file/d/1PmLVVBwBIZ6nyTCb8SXShV3l6aEZ2RCO/view?usp=share_link" target="_blank">ЛБ №1 Інформаційні технології</a>';
const lb_1 = '<a href="https://drive.google.com/file/d/1nI-V9dNfitaUzoTjz7eMfDItZBEvg5lh/view?usp=share_link" target="_blank">ІНФ_ТЕХ_приклад_укр (виявлення й аналіз вимог)</a>';

const LaboratoryWorksInfT = [
   {
     classType: "Лабораторна работа №1",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Завдання та приклад дивіться у вкладених файлах.\n
Під час виконання пункту 2 ("Підготовка сторінки проєкту в сервісі Google Docs") доступ на коментування надайте викладачеві Шафоростову (адреса для копіювання) й викладачеві Ляшенку (адреса для копіювання). Запрошення на спільну роботу (сповіщення) не надсилайте.\n
Під час виконання пункту 4 ("Проведення інтерв'ю") в ролі замовника може бути викладач Ляшенко чи один зі студентів вибраної бригади.\n
Без виконання завдань рівня складності "Розширений" максимально можлива оцінка буде 12 балів (із 16).\n${lb_1_manual}\n${lb_1}` }} />,
     countingDays: calculateDaysLeft("11.06.2023"), // Дата сдачи задания
   },
];

export { LaboratoryWorksInfT };
