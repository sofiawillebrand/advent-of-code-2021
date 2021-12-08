const result = document.getElementById("result");
const resultTwo = document.getElementById("resultTwo");

// part one
const calculate = () => {
  let indexOne = [];
  let indexTwo = [];
  let indexThree = [];
  let indexFour = [];
  let indexFive = [];
  let indexSix = [];
  let indexSeven = [];
  let indexEight = [];
  let indexNine = [];
  let indexTen = [];
  let indexEleven = [];
  let indexTwelve = [];
  let binary = [];

  const arrayOfArrays = [
    indexOne,
    indexTwo,
    indexThree,
    indexFour,
    indexFive,
    indexSix,
    indexSeven,
    indexEight,
    indexNine,
    indexTen,
    indexEleven,
    indexTwelve,
  ];

  input.map((item) => {
    binary = item.split("");
    binary.map((bit, index) => {
      arrayOfArrays[index].push(bit);
    });
  });

  const results = [];
  let ones = 0;
  let zeros = 0;
  arrayOfArrays.map((array) => {
    zeros = array.filter((bit) => bit === "0");
    ones = array.filter((bit) => bit === "1");
    if (zeros.length > ones.length) {
      results.push("0");
    } else results.push("1");
  });

  const gamma = parseInt(results.join(""), 2);

  const epsilon = parseInt(
    results
      .map((bit) => {
        if (bit === "0") {
          return "1";
        } else return "0";
      })
      .join(""),
    2
  );

  result.append(gamma * epsilon);
};

// part two
// const calculateTwo = () => {
//   let horizontal = 0;
//   let depth = 0;
//   let aim = 0;

//   input.map((item) => {
//     let direction = item.split(" ")[0];
//     let steps = parseInt(item.split(" ")[1]);
//     if (direction === "forward") {
//       horizontal += steps;
//       depth += aim * steps;
//     } else if (direction === "back") {
//       horizontal -= steps;
//     } else if (direction === "down") {
//       aim += steps;
//     } else if (direction === "up") {
//       aim -= steps;
//     }
//   });
//   resultTwo.append(horizontal * depth);
// };

calculate();
// calculateTwo();
