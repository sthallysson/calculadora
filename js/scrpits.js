const display = document.querySelector(".calculator__display");
const btns = document.querySelectorAll(".calculator__btn");

let outputValue = "";

function Calculate(event) {
  if (event.target.value !== "=") {
    outputValue += event.target.value;
  }

  display.innerHTML = outputValue;

  switch (event.target.value) {
    case "=":
      const result = eval(outputValue);
      display.innerHTML = result;
      break;
    case "c":
      outputValue = "";
      console.log(outputValue.length);
      display.innerHTML = 0;
      break;
    case "del":
      outputValue = outputValue.slice(0, -4);
      display.innerHTML = display.innerHTML.slice(0, -4);
      break;

    default:
      break;
  }

  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }

  console.log(outputValue);
}

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    Calculate(event);
  });
});
