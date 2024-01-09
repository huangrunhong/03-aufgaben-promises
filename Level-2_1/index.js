const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const myPromise = () => {
  const randomNumber = Math.ceil(Math.random() * 10);
  console.log(randomNumber);
  return new Promise((resolve, rejects) => {
    if (randomNumber < 6) return rejects(randomNumber);
    else return resolve(randomNumber);
  });
};

myPromise();
