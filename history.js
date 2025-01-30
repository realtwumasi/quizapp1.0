// Array of question objects
const questions = [
    { question: "In what year did the Berlin Wall fall?", answer: "1989" },
    { question: "Who was the first woman to win a Nobel Prize?", answer: "Marie Curie" },
    { question: "Whose assassination is believed to have kicked off World War I?", answer: "Archduke Ferdinand" },
    { question: "What year did World War II end?", answer: "1945" },
    { question: "Which dynasty built the Great Wall of China?", answer: "Ming" },
    { question: "Who was the first ruler of the Mongol Empire?", answer: "Genghis Khan" },
    { question: "Who was the second President of the United States?", answer: "John Adams" },
    { question: "Which British archaeologist discovered Tutankhamun's tomb?", answer: "Howard Carter" },
    { question: "In which European country was there a civil war between 1946 and 1949?", answer: "Greece" },
    { question: "Which war was fought in South Africa between 1899 and 1902?", answer: "Second Boer War" },
    { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
    { question: "What year was the Magna Carta signed?", answer: "1215" },
    { question: "Which British King suffered from a stammer?", answer: "George VI" },
    { question: "Who was the mother of Queen Elizabeth I?", answer: "Anne Boleyn" },
    { question: "In which city is Wall Street located?", answer: "New York" }
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
