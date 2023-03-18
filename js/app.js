const colorCode = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const color = ["red", "yellow", "black", "blue", "orange"];
const cCode = document.getElementById("colorCode");

document.getElementById("colorName").addEventListener("click", function () {
  const a = color[randomNumber(color)];
  document.body.style.backgroundColor = a;

  cCode.innerText = a;
});

document.getElementById("color").addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colorCode[randomNumber(colorCode)];
  }
  console.log(hex);

  cCode.innerText = hex;
  document.body.style.backgroundColor = hex;
});

const randomNumber = (value) => Math.floor(Math.random() * value.length);
