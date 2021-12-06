const result = document.getElementById("result");
const resultTwo = document.getElementById("resultTwo");

// part one
const calculate = () => {
  console.log("I am called");
  let biggerThan = 0;
  input.map((item, index) => {
    if (item > input[index - 1]) {
      biggerThan += 1;
    }
  });

  result.append(biggerThan);
};

// part two
const calculateTwo = () => {
  let biggerThan = 0;
  let sumOne = 0;
  let sumTwo = 0;

  input.map((item, index) => {
    sumOne = item + input[index + 1] + input[index + 2];
    sumTwo = input[index + 1] + input[index + 2] + input[index + 3];
    if (sumOne < sumTwo) {
      biggerThan += 1;
    }
  });
  resultTwo.append(biggerThan);
};

calculate();
calculateTwo();
