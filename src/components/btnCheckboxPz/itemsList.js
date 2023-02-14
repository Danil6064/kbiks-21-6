import { PracticalWorksIM } from "./../../helpers/items/English/english";

import { PracticalWorksInfT } from "./../../helpers/items/InformationTechnology/informationTechnology";

import { PracticalWorksAKC } from "./../../helpers/items/ArchitectureOfComputerSystems/architectureOfComputerSystems";

import { PracticalWorksPro3 } from "./../../helpers/items/ProgrammingPart3/programmingPart3";

import { PracticalWorksPKr } from "./../../helpers/items/AppliedCryptography/appliedCryptography";

import { PracticalWorksTZI } from "./../../helpers/items/ComplexesOfTZI/complexesOfTZI";

import { PracticalWorksIKC } from "./../../helpers/items/InformationAndCommunicationSystems/InformationAndCommunicationSystems";

import { PracticalWorksOOP } from "./../../helpers/items/ObjectOrientedProgramming/objectOrientedProgramming";

const items = [
  {
    nameItems: "English",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "InformationTechnology",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ArchitectureOfComputerSystems",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ProgrammingPart3",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "AppliedCryptography",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ComplexesOfTZI",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "InformationAndCommunicationSystems",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ObjectOrientedProgramming",
    classType: [],
    textWork: [],
    countingDays: [],
  },
];

export { items };

// Перебор массивов для Английского
PracticalWorksIM.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "English") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});

// Перебор массивов для Информационных Технологий
PracticalWorksInfT.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "InformationTechnology") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});

// Перебор массивов для AKC
PracticalWorksAKC.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ArchitectureOfComputerSystems") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});

// Перебор массивов для Про3
PracticalWorksPro3.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ProgrammingPart3") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});

// Перебор массивов для ПКр
PracticalWorksPKr.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "AppliedCryptography") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});

// Перебор массивов для ТЗИ
PracticalWorksTZI.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ComplexesOfTZI") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});

// Перебор массивов для ИКС
PracticalWorksIKC.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "InformationAndCommunicationSystems") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});

// Перебор массивов для ООП
PracticalWorksOOP.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ObjectOrientedProgramming") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});
