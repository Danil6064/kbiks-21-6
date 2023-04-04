import calculateDaysLeft from "./../../calculateDaysLeft";


const lb_1_manual = '<a href="https://drive.google.com/file/d/1QfIt_HGDbFxyWkKeHnE0NVqv4uyyWJ-f/view?usp=share_link">ЛБ№1</a>';
const lb_1_additionalFiles_1 = '<a href="https://drive.google.com/file/d/1tHyU68iwmkiHlF5i7zzf3vCugRWDgyTq/view?usp=share_link">Бібліотека MMATH.lib</a>';
const lb_1_additionalFiles_2 = '<a href="https://drive.google.com/file/d/16U8vBzyOBKeH1QGRl_cL8Qmxe64U-gqi/view?usp=share_link">Src_DivTest_and_PQ.rar</a>';

const LaboratoryWorksPro3 = [
   {
     classType: "Лабораторна работа №1",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Якщо роботу здати до 04.04.2023, то є шанс отримати додатковий бал\nВам потрібно зробити Лабораторну роботу №1. Матеріали за посиланням ${lb_1_manual}, ${lb_1_additionalFiles_1}, ${lb_1_additionalFiles_2}\nЗдати завдання потрібно на дл нуре.` }} />,
     countingDays: calculateDaysLeft("10.06.2023"), // Дата сдачі завдання
   },
];

export { LaboratoryWorksPro3 };

