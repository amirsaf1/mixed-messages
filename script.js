const randomNumber = (num) => {
  return Math.floor(Math.random * num);
};

if (randomNumber() > 0) {
  console.log("Your sign is a star");
} else {
  console.log("Error");
}

console.log(randomNumber(5));
