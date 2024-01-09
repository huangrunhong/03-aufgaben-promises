const acceptNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number === NaN) {
      const isNotNumberError = new Error("it must be a Number");
      reject(isNotNumberError);
      return;
    }
    setTimeout(() => {
      const double = number * 2;
      return resolve(double); //must or notMust?
    }, 2000);
  });
};

acceptNumber("a").then((double) => console.log(double));
