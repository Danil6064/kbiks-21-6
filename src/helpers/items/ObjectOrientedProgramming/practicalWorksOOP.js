import calculateDaysLeft from "../../calculateDaysLeft";

const pz_1_manual = '<a href="https://drive.google.com/file/d/106p7DwZ12KpGsiigFWw8J3dS1WCM29R0/view?usp=share_link">Пз№1</a>';
const pz_2_manual = '<a href="https://drive.google.com/file/d/1EUMzQbqGMbpHdltA-Cm_wDJWgYVju0_Y/view?usp=share_link">Пз№2</a>';

const PracticalWorksOOP = [
   {
     classType: "Практична робота №1",
     textWork:<div dangerouslySetInnerHTML={{ __html: ` Вам потрібно зробити завдання, матеріали знаходяться за посиланням ${pz_1_manual}` }} />,
     countingDays: calculateDaysLeft("19.04.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №2",
     textWork:<div dangerouslySetInnerHTML={{ __html: ` Вам потрібно зробити завдання, матеріали знаходяться за посиланням ${pz_2_manual}` }} />,
     countingDays: calculateDaysLeft("19.04.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №3",
     textWork:<div dangerouslySetInnerHTML={{ __html: ` Вам потрібно зробити завдання, матеріали знаходяться на пошті` }} />,
     countingDays: calculateDaysLeft("17.05.2023"), // Дата сдачи задания
   },
   {
     classType: "Практична робота №4",
     textWork:<div dangerouslySetInnerHTML={{ __html: ` Вам потрібно зробити завдання, матеріали знаходяться на пошті` }} />,
     countingDays: calculateDaysLeft("17.05.2023"), // Дата сдачи задания
   },
];

export { PracticalWorksOOP };
