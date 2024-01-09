const asyncOperation = (number) =>
  new Promise((resolve) => resolve(number * number));

const setNumber = (number) =>
  asyncOperation(number)
    .then((result) => asyncOperation(result))
    .then((result) => {
      console.log(asyncOperation(result));
    });

// const showResult = async () => {
//   const result = await setNumber(2);
//   console.log(result);
// };
setNumber(2);
