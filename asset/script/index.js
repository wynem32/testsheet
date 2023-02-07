import data from "../json/data.json" assert { type: "json" };
import {
  handleFirstChoice,
  handleNextBtn,
  handlePreviousBtn,
} from "./keyFunc.js";

const buttons = document.querySelectorAll(".button-btn");

const render = (button) => {
  button.getAttribute("class").includes("previous")
  ? handlePreviousBtn(data)
  : handleNextBtn(data, data.length);
}

const startTest = (data) => {
  handleFirstChoice(data);
};

const renderQuestion = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => render(button));
  });
};

startTest(data);
renderQuestion(buttons);
