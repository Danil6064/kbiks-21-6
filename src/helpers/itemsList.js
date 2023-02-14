// import AppliedCryptography from "./items/AppliedCryptography/appliedCryptography";
// import ComplexesOfTZI from "./items/ComplexesOfTZI/complexesOfTZI";
// import InformationAndCommunicationSystems from "./items/InformationAndCommunicationSystems/InformationAndCommunicationSystems";
// import ObjectOrientedProgramming from "./items/ObjectOrientedProgramming/objectOrientedProgramming";
// import ProgrammingPart3 from "./items/ProgrammingPart3/programmingPart3";

// import { LaboratoryWorks } from "./items/English/laboratoryWorks";
import { LaboratoryWorksIM, PracticalWorksIM } from "./items/English/english";

import {
  LaboratoryWorksInfT,
  PracticalWorksInfT,
} from "./items/InformationTechnology/informationTechnology";

import {
  LaboratoryWorksAKC,
  PracticalWorksAKC,
} from "./items/ArchitectureOfComputerSystems/architectureOfComputerSystems";

import {
  LaboratoryWorksPro3,
  PracticalWorksPro3,
} from "./items/ProgrammingPart3/programmingPart3";

import {
  LaboratoryWorksPKr,
  PracticalWorksPKr,
} from "./items/AppliedCryptography/appliedCryptography";

import {
  LaboratoryWorksTZI,
  PracticalWorksTZI,
} from "./items/ComplexesOfTZI/complexesOfTZI";

import {
  LaboratoryWorksIKC,
  PracticalWorksIKC,
} from "./items/InformationAndCommunicationSystems/InformationAndCommunicationSystems";

import {
  LaboratoryWorksOOP,
  PracticalWorksOOP,
} from "./items/ObjectOrientedProgramming/objectOrientedProgramming";

const items = [
  {
    nameItems: "English",
    nameItemsTranslate: "іноземна мова",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "InformationTechnology",
    nameItemsTranslate: "інформаційні технології",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ArchitectureOfComputerSystems",
    nameItemsTranslate: "архітектура комп'ютерних систем",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ProgrammingPart3",
    nameItemsTranslate: "програмування ч.3",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "AppliedCryptography",
    nameItemsTranslate: "прикладна криптологія",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ComplexesOfTZI",
    nameItemsTranslate: "комплекси тзі",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "InformationAndCommunicationSystems",
    nameItemsTranslate: "інформаційно-комунікаційні системи",
    classType: [],
    textWork: [],
    countingDays: [],
  },
  {
    nameItems: "ObjectOrientedProgramming",
    nameItemsTranslate: "об'єктно-орієнтоване програмування",
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
LaboratoryWorksInfT.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "InformationTechnology") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

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
LaboratoryWorksAKC.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ArchitectureOfComputerSystems") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

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
LaboratoryWorksPro3.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ProgrammingPart3") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

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
LaboratoryWorksPKr.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "AppliedCryptography") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

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
LaboratoryWorksTZI.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ComplexesOfTZI") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

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
LaboratoryWorksIKC.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "InformationAndCommunicationSystems") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

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
LaboratoryWorksOOP.forEach((labWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ObjectOrientedProgramming") {
      item.classType.push(labWork.classType);
      item.textWork.push(labWork.textWork);
      item.countingDays.push(labWork.countingDays);
    }
  });
});

PracticalWorksOOP.forEach((pzWork) => {
  items.forEach((item) => {
    if (item.nameItems === "ObjectOrientedProgramming") {
      item.classType.push(pzWork.classType);
      item.textWork.push(pzWork.textWork);
      item.countingDays.push(pzWork.countingDays);
    }
  });
});
