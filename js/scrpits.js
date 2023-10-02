const display = document.querySelector(".calculator__display");
const btns = document.querySelectorAll(".calculator__btn");

let result = "";

function calculate(event) {
  clickedCalculate(event);

  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
}

function clickedCalculate(event) {
  const clickedBtnValue = event.target.value;

  if (clickedBtnValue !== "=") {
    result += clickedBtnValue;
  }

  display.innerHTML = result;

  switch (clickedBtnValue) {
    case "=":
      result = eval(result);
      display.innerHTML = result;
      break;
    case "c":
      result = "";
      display.innerHTML = 0;
      break;
    case "del":
      result = result.slice(0, -4);
      display.innerHTML = display.innerHTML.slice(0, -4);
      break;
  }
}

function keyboardCalculate(event) {
  const key = event.key;

  switch (key) {
    case "Backspace":
      result = result.slice(0, -1);
      display.innerHTML = display.innerHTML.slice(0, -1);
      break;
  }

  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", calculate);
});

window.addEventListener("keydown", keyboardCalculate);
