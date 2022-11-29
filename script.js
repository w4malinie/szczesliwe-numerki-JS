const btn = document.getElementById("btn");
const elH1 = document.querySelector("p");
const balls = document.querySelectorAll(".ball");

const MIN_RESULT = 1;
const MAX_RESULT = 49;

function getRandomNum(min, max) {
  min = Math.round(min);
  max = Math.round(max);
  return Math.round(Math.random() * (max - min));
}

const toggleSpinner = () => {
  const spinner = document.getElementById("spinner-container");
  spinner.classList.toggle("hidden");
};

function setActiveBalls(numbers) {
  balls.forEach((ball, index) => {
    ball.classList.add("active");
    ball.innerText = numbers[index];
  });
}

function generateNums() {
  const results = [];

  while (results.length <= 6) {
    const randomNumber = getRandomNum(MIN_RESULT, MAX_RESULT);

    if (!results.includes(randomNumber)) {
      results.push(randomNumber);
    }
  }

  return results;
}

function clearActiveBalls() {
  balls.forEach((ball) => {
    ball.classList.remove("active");
  });
}

btn.addEventListener("click", () => {
  toggleSpinner();
  clearActiveBalls();
  const numbers = generateNums();

  elH1.innerText = "Twoje szczęśliwe numery, to:";
  btn.innerText = "Losuj ponownie";
  setTimeout(function () {
    toggleSpinner();
    setActiveBalls(numbers);
  }, 1500);
});
