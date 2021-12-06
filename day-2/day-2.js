const result = document.getElementById("result");
const resultTwo = document.getElementById("resultTwo");

// part one
const calculate = () => {
  let horizontal = 0;
  let depth = 0;
  input.map((item) => {
    let direction = item.split(" ")[0];
    let steps = parseInt(item.split(" ")[1]);
    if (direction === "forward") {
      horizontal += steps;
    } else if (direction === "back") {
      horizontal -= steps;
    } else if (direction === "down") {
      depth += steps;
    } else if (direction === "up") {
      depth -= steps;
    }
  });
  result.append(horizontal * depth);
};

// part two
const calculateTwo = () => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  input.map((item) => {
    let direction = item.split(" ")[0];
    let steps = parseInt(item.split(" ")[1]);
    if (direction === "forward") {
      horizontal += steps;
      depth += aim * steps;
    } else if (direction === "back") {
      horizontal -= steps;
    } else if (direction === "down") {
      aim += steps;
    } else if (direction === "up") {
      aim -= steps;
    }
  });
  resultTwo.append(horizontal * depth);
};

calculate();
calculateTwo();
