function calculateDaysLeft(targetDate) {
  const currentDate = new Date();
  const [day, month, year] = targetDate.split(".");
  const targetDateParsed = new Date(year, month - 1, day);
  const timeDifference = targetDateParsed - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  let message = "";

  if (daysDifference >= 0) {
    if (daysDifference === 0) {
      message = `Здача завдання: Сьогодні`;
    } else if (daysDifference > 31) {
      message = `Здати потрібно ${targetDate}`;
    } else if (daysDifference % 10 === 1 && daysDifference % 100 !== 11) {
      message = `До здачі залишився: ${daysDifference} день`;
    } else if (
      daysDifference % 10 >= 2 &&
      daysDifference % 10 <= 4 &&
      (daysDifference % 100 < 10 || daysDifference % 100 > 20)
    ) {
      message = `До здачі залишилось: ${daysDifference} дні`;
    } else {
      message = `До здачі залишилось: ${daysDifference} днів`;
    }
  } else {
    let secondDigit = Math.abs(daysDifference) % 10;
    if (
      Math.abs(daysDifference) === 1 ||
      (secondDigit === 1 && Math.abs(daysDifference) !== 11)
    ) {
      message = `Просрочено на: ${Math.abs(daysDifference)} день`;
    } else if (Math.abs(daysDifference) > 31) {
      message = `Здати потрібно було ще ${targetDate}`;
    } else if (
      secondDigit >= 2 &&
      secondDigit <= 4 &&
      (Math.abs(daysDifference) < 12 || Math.abs(daysDifference) > 20)
    ) {
      message = `Просрочено на: ${Math.abs(daysDifference)} дні`;
    } else if (
      Math.abs(daysDifference) >= 5 &&
      Math.abs(daysDifference) <= 31
    ) {
      message = `Просрочено на: ${Math.abs(daysDifference)} днів`;
    }
  }
  // else {
  //   if (Math.abs(daysDifference) === 1) {
  //     message = `Просрочено на: ${Math.abs(daysDifference)} день`;
  //   } else if (Math.abs(daysDifference) >= 2 && Math.abs(daysDifference) <= 4) {
  //     message = `Просрочено на: ${Math.abs(daysDifference)} дні`;
  //   } else {
  //     message = `Просрочено на: ${Math.abs(daysDifference)} днів`;
  //   }
  // }
  return message;
}

// function calculateDaysLeft(targetDate) {
//   const currentDate = new Date();
//   const [day, month, year] = targetDate.split(".");
//   const targetDateParsed = new Date(year, month - 1, day);
//   const timeDifference = targetDateParsed - currentDate;
//   const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//   let message = "";

//   if (daysDifference >= 0) {
//     if (daysDifference % 10 === 1) {
//       message = `До здачі залишився: ${daysDifference} день`;
//     } else if (
//       daysDifference >= 2 &&
//       daysDifference % 10 >= 2 &&
//       daysDifference % 10 <= 3
//     ) {
//       message = `До здачі залишилось: ${daysDifference} дні`;
//     } else if (
//       daysDifference >= 4 &&
//       daysDifference % 10 >= 5 &&
//       daysDifference % 10 <= 30
//     ) {
//       message = `До здачі залишилось: ${daysDifference} днів`;
//     } else if (daysDifference % 10 === 0) {
//       message = `Здача завдання: Сьогодні`;
//     }
//   } else {
//     if (Math.abs(daysDifference) === 1) {
//       message = `Просрочено на: ${Math.abs(daysDifference)} день`;
//     } else if (Math.abs(daysDifference) >= 2 && Math.abs(daysDifference) <= 4) {
//       message = `Просрочено на: ${Math.abs(daysDifference)} дні`;
//     } else {
//       message = `Просрочено на: ${Math.abs(daysDifference)} днів`;
//     }
//   }
//   return message;
// }

export default calculateDaysLeft;
