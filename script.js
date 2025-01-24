const selectNumber = (randomNumber = (num) => {
  Math.floor(Math.random * num);
});

if (selectNumber > 0 && selectNumber < 10) {
  console.log("Your sign is a star");
} else {
  console.log("Error");
}

selectNumber(1);
