const quizDB = [
    {
        question:"Q1 : What is the fullform of HTML?",
        a: "Hello To My Land",
        b: "Hey text markup language",
        c: "hyper text makeup language",
        d: "hypertext markup language",
        ans: "ans4"
    },

    {
        question:"Q2 : What is the fullform of CSS?",
        a: "Cascading style sheet",
        b: "Cascading style sheep",
        c: "Cartoon style sheet",
        d: "Cascading super sheet",
        ans: "ans1"
    },

    {
        question:"Q3 : What is the fullform of HTTP?",
        a: "Hyper Text transfer Protocol",
        b: "Hyper Text test protocol",
        c: "hey transfer protocol",
        d: "hyper text transfer product",
        ans: "ans1"
    },

    {
        question:"Q4 : What is the fullform of JS?",
        a: "JavaSuper",
        b: "JavaScript",
        c: "JustScript",
        d: "JavaState",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showCard = document.querySelector('#showCard');

let questionCount = 0;
let score = 0;


const loadQuestion = () =>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

const deselect = () =>{
    answers.forEach((currElem) => currElem.checked = false);
}

loadQuestion();



const getCheckAnswer = () => {
    let answer;
     answers.forEach((currElem) =>{
         if (currElem.checked){
             answer = currElem.id;
         }
     })
     return answer;
};

submit.addEventListener('click', () =>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if (checkAnswer === quizDB[questionCount].ans){
        score ++
    }

    questionCount ++;
    deselect();
    if (questionCount < quizDB.length){
        loadQuestion();
    }else{
      showCard.innerHTML = `
      <h3>You Scored ${score}/${quizDB.length} 👍</h3>
      <button class="btn" onclick="location.reload()">Play Again</button>
      `
      showCard.classList.remove('showScore');
    }
});
 