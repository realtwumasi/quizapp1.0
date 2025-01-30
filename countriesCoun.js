// Array of question objects
const questions = [
    { question: "Which country is home to the tallest building in the world?", answer: "UAE" },
    { question: "What is the capital of Lebanon?", answer: "Beirut" },
    { question: "What African country has the largest population?", answer: "Nigeria" },
    { question: "What country is the largest by size in the world?", answer: "Russia" },
    { question: "The first modern Olympic Games were held in …", answer: "Greece" },
    { question: "What country has the most islands in the world?", answer: "Sweden" },
    { question: "Where is Gobi Desert located?", answer: "Mongolia" },
    { question: "Which country invented gin?", answer: "Holland" },
    { question: "What is the smallest country?", answer: "Vatican City" },
    { question: "Which country has a unicorn as its national animal?", answer: "Scotland" },
    { question: "What is the hottest country in the world?", answer: "Burkina Faso" },
    { question: "Where is the River Ganges?", answer: "India" },
    { question: "Which country has the highest mountain?", answer: "Nepal" },
    { question: "What country is named after the equator?", answer: "Ecuador" },
    { question: "What country in the EU had the biggest population?", answer: "Germany" }
];

let currentQuestionIndex = localStorage.getItem('currentQuestionIndex') ? parseInt(localStorage.getItem('currentQuestionIndex')) : 0;
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.textContent = questions[currentQuestionIndex].question;
}

// Function to update the score display
function updateScoreDisplay() {
    document.getElementById('score').textContent = score;
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedback = document.getElementById('feedback');

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = "Correct!";
        score += 3; // Add 3 points for a correct answer
        correctSound.play();
    } else {
        feedback.textContent = `Incorrect! The correct answer is "${correctAnswer}".`;
        wrongSound.play();
    }

    // Update the score display and save to localStorage
    updateScoreDisplay();
    localStorage.setItem('score', score);
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    displayQuestion();
    document.getElementById('user-answer').value = ''; // Clear the input field
    document.getElementById('feedback').textContent = ''; // Clear feedback
}

// Function to reset the game
function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('score');
    displayQuestion();
    updateScoreDisplay();
    document.getElementById('user-answer').value = ''; // Clear the input field
    document.getElementById('feedback').textContent = ''; // Clear feedback
}

// Event listeners
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('reset').addEventListener('click', resetGame);

// Initialize the game
displayQuestion();
updateScoreDisplay();
