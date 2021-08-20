const quizDB = [
  {
    question:
      "Q 1 - Which one of the following also known as Conditional Expression?",
    a: " Alternative to if-else",
    b: " Switch statement",
    c: "If-then-else statement",
    d: " immediate if",
    ans: "ans4",
  },
  {
    question: "Q 2 - Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2",
  },
  {
    question: "Q 3 -Which of the following code creates an object?",
    a: "var book = Object();",
    b: "var book = new Object();",
    c: "var book = new OBJECT();",
    d: "var book = new Book();",
    ans: "ans2",
  },
  {
    question:
      "Q 4 -  Number object defines how many total digits to display of a number?",
    a: "toExponential()",
    b: "toFixed()",
    c: "toLocaleString()",
    d: "toPrecision()",
    ans: "ans4",
  },
  {
    question:
      "Q 5 - Returns true if every element in this array satisfies the provided testing function?",
    a: "concat()",
    b: "every()",
    c: "push()",
    d: "some()",
    ans: "ans2",
  },
  {
    question: "Q 6 - The function and var are known as?",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

//same class for input radio button//
const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore")

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
   
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer === quizDB[questionCount].ans){
      score++;
  }

  questionCount++;
  if(questionCount<quizDB.length){
      loadQuestion();

  }else{
      showScore.innerHTML = `
      <h3> You Scored ${score}/${quizDB.length} </h3>
      <button class="btn" onClick="location.reload()">Play again</button>
      `;
      showScore.classList.remove("scoreArea");

  }
});
