import calculateDaysLeft from "./../../calculateDaysLeft";

const main_manual_1 = '<a href="https://drive.google.com/drive/folders/1EJnl-70kpiTZ7Nw8uhmPMK8Jm5tMgaVg?usp=share_link" target="_blank">Збірник файлів українською</a>';
const main_manual_2 = '<a href="https://drive.google.com/drive/folders/10UweRiLKjtEVjETi4hzilY3xwcv7-RRr?usp=share_link" target="_blank">Збірник файлів російською</a>';
const pz_1_2 = '<a href="https://docs.google.com/document/d/1ONzoJ9YkbpvWwkB8bl3QFCl1k6eKj6xh/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank"> Методичка для 1 та 2 пз</a>';
const pz_2_3 = '<a href="https://docs.google.com/document/d/11ptKmy76ttYHqR7hRPLmWef7ihhkjCs9/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=truehttps://docs.google.com/document/d/11ptKmy76ttYHqR7hRPLmWef7ihhkjCs9/edit?usp=share_link&ouid=109219041095382126673&rtpof=true&sd=true" target="_blank"> Методичка для 3 та 4 пз</a>';


const PracticalWorksAKC = [
   {
     classType: "Корисні файли",
     textWork: <div dangerouslySetInnerHTML={{ __html: `${main_manual_1}\n${main_manual_2}` }} />,
    countingDays: calculateDaysLeft("09.06.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №1(як консультація)",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Вирішити завдання №1 свого варіанту за посиланням ${pz_1_2}` }} />,
     countingDays: calculateDaysLeft("20.03.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №2",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Вирішити завдання №2 та №3 свого варіанту за посиланням ${pz_1_2}` }} />,
     countingDays: calculateDaysLeft("21.03.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №3(як консультація)",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Вирішити завдання №1 свого варіанту за посиланням ${pz_2_3}` }} />,
     countingDays: calculateDaysLeft("10.04.2023"), // Дата сдачи задания
   },
   {
     classType: "Контрольна робота №1",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Якщо ви не писали кр№1 у вас є можливість написати їх на останній лб, чи пз, додатково ще будуть консультації для написання кр` }} />,
     countingDays: calculateDaysLeft("31.05.2023"), // Дата сдачи задания
   },
     classType: "Контрольна робота №2",
     textWork: <div dangerouslySetInnerHTML={{ __html: `Якщо ви не писали кр№2 у вас є можливість написати їх на останній лб, чи пз, додатково ще будуть консультації для написання кр` }} />,
     countingDays: calculateDaysLeft("31.05.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksAKC };
