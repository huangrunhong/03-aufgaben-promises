const myPromise = (number) => {
  return new Promise((resolve) => {
    const randomNumber = Math.ceil(Math.random() * 1000);
    setTimeout(() => {
      return resolve(randomNumber);
    }, number);
  });
};

Promise.all([myPromise(200), myPromise(350), myPromise(1000)]).then((value) =>
  console.log(value)
);
