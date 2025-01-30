// Array of question objects
const questions = [
    { question: "What is the name of the main antagonist in the Shakespeare play Othello?", answer: "Iago" },
    { question: "What was the old name for a Snickers bar before it changed in 1990?", answer: "Marathon" },
    { question: "What is the name of the coffee shop in the sitcom, Friends?", answer: "Central Perk" },
    { question: "Who wrote the novels Gone Girl and Sharp objects?", answer: "Gillian Flynn" },
    { question: "How many times has England won the men's football World Cup?", answer: "Once" },
    { question: "What is the smallest planet in our solar system?", answer: "Mercury" },
    { question: "What year did ABBA win Eurovision?", answer: "1974" },
    { question: "In what year did the Beatles split up?", answer: "1970" },
    { question: "Who sang 'I Will Forever Hate Roses'?", answer: "Dolly Parton" },
    { question: "Who was the first presenter of the X Factor in the UK?", answer: "Kate Thornton" },
    { question: "Which year did EastEnders begin broadcasting?", answer: "1985" },
    { question: "Who played Gareth Keenan in the sitcom, The Office?", answer: "Mackenzie Crook" },
    { question: "Which soft drink is often associated with Scotland?", answer: "Irn-Bru" },
    { question: "What temperature does water boil at in degree Celsius?", answer: "100" },
    { question: "What number is a baker's dozen?", answer: "13" }
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
