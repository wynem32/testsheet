import {
  removeElement,
  renderElement,
  resultTable,
} from "./questionsElements.js";

let numberQuestion = 0;

const showQuestion = (data) => {
  renderElement(data);
};

const disableButton = () => {
  document.querySelector(".previous").classList.add("btn-disabled");
};

const enableButton = () => {
  document.querySelector(".previous").classList.remove("btn-disabled");
};

const firstRender = (data) => {
  renderElement(data[0]);
  disableButton();
};

const previousQuestion = (data) => {
  numberQuestion -= 1;
  if (numberQuestion === 0) {
    removeElement();
    showQuestion(data[numberQuestion]);
    disableButton();
    return;
  } else {
    removeElement();
    showQuestion(data[numberQuestion]);
  }
};

const nextQuestion = (data, dataLength) => {
  if (numberQuestion < dataLength - 1) {
    enableButton();
    removeElement();
    numberQuestion += 1;
    showQuestion(data[numberQuestion]);
  } else {
    numberQuestion += 1;
    resultTable(data);
  }
};

const chooseAnswer = (data) => {
  const answers = document.querySelectorAll(".answer input");
  answers.forEach((answer) => {
    if (answer.value === data[numberQuestion].answerChoosen) {
      answer.setAttribute("checked", "");
    }
    answer.addEventListener("click", () => {
      data[numberQuestion].answerChoosen = answer.getAttribute("value");
    });
  });
};

export const handleFirstChoice = (data) => {
  firstRender(data);
  chooseAnswer(data);
};

export const handlePreviousBtn = (data) => {
  previousQuestion(data);
  chooseAnswer(data);
};

export const handleNextBtn = (data, dataLength) => {
  nextQuestion(data, dataLength);
  chooseAnswer(data);
};