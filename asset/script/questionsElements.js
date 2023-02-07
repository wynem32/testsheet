const multiChoice = document.querySelector("#multichoice");
const questions = document.querySelector("#questions");
const buttons = document.querySelector("#button");

export const renderElement = (data) => {
  const questionsContain = document.createElement("div");
  questionsContain.classList.add("questions-contain");

  const questionTitle = document.createElement("h2");
  questionTitle.classList.add("question-title");
  questionTitle.innerHTML = `Q${data.index + 1}. ${data.question}`;
  questionsContain.appendChild(questionTitle);

  const answerContain = document.createElement("div");
  answerContain.classList.add("question-answers");

  data.answers.map((answer, index) => {
    const answerWrapper = document.createElement("div");
    answerWrapper.classList.add("answer");

    const answerInput = document.createElement("input");
    answerInput.id = index;
    answerInput.setAttribute("name", "answer");
    answerInput.setAttribute("type", "radio");
    answerInput.setAttribute("value", answer.value);
    answerWrapper.appendChild(answerInput);

    const answerLabel = document.createElement("label");
    answerLabel.setAttribute("for", index);
    answerLabel.textContent = answer.value;
    answerWrapper.appendChild(answerLabel);

    answerContain.appendChild(answerWrapper);
  });

  questionsContain.appendChild(answerContain);
  questions.appendChild(questionsContain);
};

export const removeElement = () => {
  const questionsContain = document.querySelector(".questions-contain");
  questions.removeChild(questionsContain);
};

export const resultTable = (data) => {
  multiChoice.removeChild(questions);
  multiChoice.removeChild(buttons);

  const result = document.createElement("section");
  result.id = "result";

  const resultContain = document.createElement("div");
  resultContain.classList.add("result-contain");

  result.appendChild(resultContain);

  const resultPoint = document.createElement("h2");
  resultPoint.classList.add("result-point");

  resultContain.appendChild(resultPoint);

  const resultInfo = document.createElement("div");
  resultInfo.classList.add("result-info");

  let totalScore = 0;
  data.forEach((question) => {
    const resultInfo = document.createElement("div");
    resultInfo.classList.add("result-info");

    const resultInfoQuestion = document.createElement("h4");
    const resultInfoCorrect = document.createElement("h4");
    const resultInfoPoint = document.createElement("h4");

    if (question.answerChoosen === question.correctAnswer) {
      totalScore += 1;
      resultInfoPoint.innerText = "Score: 1";
    } else {
      resultInfoPoint.innerText = "Score: 0";
    }

    resultInfoQuestion.innerText = `Q${question.index + 1}. ${
      question.question
    }`;
    resultInfoCorrect.innerText = `Correct Answer: ${question.correctAnswer}`;

    resultInfo.appendChild(resultInfoQuestion);
    resultInfo.appendChild(resultInfoCorrect);
    resultInfo.appendChild(resultInfoPoint);

    resultContain.appendChild(resultInfo);
  });

  resultPoint.innerText = `Total Score: ${totalScore}/${data.length}`;

  multiChoice.appendChild(result);
};
