import { serversLinks } from "../constants";

export const primeCheckTwo = (numbersArr) => {
  let usageArr = [false, false];

  let cond = true;
  let answers = [];

  while (cond) {
    if (!usageArr[0] && usageArr.length > 0) {
      let checkingNumber = usageArr.pop();
      usageArr[0] = true;
      fetch(serversLinks[0]).then((response) => {
        usageArr[0] = false;
        console.log("The Reponse", response);
      });
    }

    if (!usageArr[1] && usageArr.length > 0) {
      let checkingNumber = usageArr.pop();
      usageArr[1] = true;
      fetch(serversLinks[1]).then((response) => {
        usageArr[1] = false;
        console.log("The Reponse", response);
      });
    }

    cond =
      numbersArr === 0 &&
      usageArr.every(function (e) {
        return !e;
      });
  }
  return answers;
};
