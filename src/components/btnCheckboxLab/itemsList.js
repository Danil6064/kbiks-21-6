import { LaboratoryWorksIM } from "./../../helpers/items/English/english";

import { LaboratoryWorksInfT } from "./../../helpers/items/InformationTechnology/informationTechnology";

import { LaboratoryWorksAKC } from "./../../helpers/items/ArchitectureOfComputerSystems/architectureOfComputerSystems";

import { LaboratoryWorksPro3 } from "./../../helpers/items/ProgrammingPart3/programmingPart3";

import { LaboratoryWorksPKr } from "./../../helpers/items/AppliedCryptography/appliedCryptography";

import { LaboratoryWorksTZI } from "./../../helpers/items/ComplexesOfTZI/complexesOfTZI";

import { LaboratoryWorksIKC } from "./../../helpers/items/InformationAndCommunicationSystems/InformationAndCommunicationSystems";

import { LaboratoryWorksOOP } from "./../../helpers/items/ObjectOrientedProgramming/objectOrientedProgramming";

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
LaboratoryWorksIM.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "English") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

// Перебор массивов для Информационных Технологий
LaboratoryWorksInfT.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "InformationTechnology") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

// Перебор массивов для AKC
LaboratoryWorksAKC.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ArchitectureOfComputerSystems") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

// Перебор массивов для Про3
LaboratoryWorksPro3.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ProgrammingPart3") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

// Перебор массивов для ПКр
LaboratoryWorksPKr.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "AppliedCryptography") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

// Перебор массивов для ТЗИ
LaboratoryWorksTZI.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ComplexesOfTZI") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

// Перебор массивов для ИКС
LaboratoryWorksIKC.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "InformationAndCommunicationSystems") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

// Перебор массивов для ООП
LaboratoryWorksOOP.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ObjectOrientedProgramming") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});
