const levels = {
    easy: [
        { question: "Choose the correct word:", correctAnswer: "the", options: ["the", "teh"] },
        { question: "Choose the correct word:", correctAnswer: "friend", options: ["freind", "friend"] },
        { question: "Choose the correct word:", correctAnswer: "believe", options: ["believe", "beleive"] },
        { question: "Choose the correct word:", correctAnswer: "a lot", options: ["alot", "a lot"] },
        { question: "Choose the correct word:", correctAnswer: "occasion", options: ["occassion", "occasion"] },
        { question: "Choose the correct word:", correctAnswer: "weird", options: ["weird", "wierd"] },
        { question: "Choose the correct word:", correctAnswer: "definitely", options: ["definately", "definitely"] },
        { question: "Choose the correct word:", correctAnswer: "receive", options: ["receive", "recieve"] },
        { question: "Choose the correct word:", correctAnswer: "exist", options: ["exsist", "exist"] },
        { question: "Choose the correct word:", correctAnswer: "separate", options: ["separate", "seperate"] },
    ],
    medium: [
        { question: "Choose the correct word:", correctAnswer: "receive", options: ["recieve", "receive"] },
        { question: "Choose the correct word:", correctAnswer: "environment", options: ["environment", "enviroment"] },
        { question: "Choose the correct word:", correctAnswer: "necessary", options: ["necesary", "necessary"] },
        { question: "Choose the correct word:", correctAnswer: "occurrence", options: ["occurence", "occurrence"] },
        { question: "Choose the correct word:", correctAnswer: "believe", options: ["believe", "beleive"] },
        { question: "Choose the correct word:", correctAnswer: "separate", options: ["seperate", "separate"] },
        { question: "Choose the correct word:", correctAnswer: "weird", options: ["weird", "wierd"] },
        { question: "Choose the correct word:", correctAnswer: "definitely", options: ["definately", "definitely"] },
        { question: "Choose the correct word:", correctAnswer: "misspell", options: ["misspell", "mispell"] },
        { question: "Choose the correct word:", correctAnswer: "a lot", options: ["alot", "a lot"] },
    ],
    difficult: [
        { question: "Choose the correct word:", correctAnswer: "conscientious", options: ["conscientious", "conscientous"] },
        { question: "Choose the correct word:", correctAnswer: "accommodation", options: ["accomodation", "accommodation"] },
        { question: "Choose the correct word:", correctAnswer: "bureaucracy", options: ["bureaucracy", "bureaucacy"] },
        { question: "Choose the correct word:", correctAnswer: "entrepreneurship", options: ["enterpreneurship", "entrepreneurship"] },
        { question: "Choose the correct word:", correctAnswer: "maintenance", options: ["maintenance", "maintanance"] },
        { question: "Choose the correct word:", correctAnswer: "millennium", options: ["millenium", "millennium"] },
        { question: "Choose the correct word:", correctAnswer: "pronunciation", options: ["pronunciation", "pronuncition"] },
        { question: "Choose the correct word:", correctAnswer: "supersede", options: ["supesede", "supersede"] },
        { question: "Choose the correct word:", correctAnswer: "ukulele", options: ["ukulele", "ukurele"] },
        { question: "Choose the correct word:", correctAnswer: "exacerbate", options: ["exacebate", "exacerbate"] },
    ],
};

let currentLevel;
let currentQuestionIndex;
let score = 0;
let timer;
const questionTime = 10; // 10 seconds per question
const totalQuestions = 10; // Total number of questions to display
let isAnswerSelected = false; // Track if the user has selected an answer
let scoreText = document.getElementById("score"); // Initialize score display element

const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");
const finalScreen = document.getElementById("final-screen");
const questionText = document.getElementById("question");
const option1Button = document.getElementById("option1");
const option2Button = document.getElementById("option2");
const resultText = document.getElementById("result");
const questionsLeftText = document.getElementById("questions-left");
const finalScoreText = document.getElementById("final-score");
const playAgainButton = document.getElementById("play-again");
const timerText = document.getElementById("timer");


function startGame(level) {
    clearInterval(timer); // Ensure any existing timer is stopped
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    scoreText.textContent = "0"; // Initialize score as "0"
    showGameScreen();
    shuffleQuestions(levels[currentLevel]);
    nextQuestion();
}

function showGameScreen() {
    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block";
    finalScreen.style.display = "none";
}

function shuffleQuestions(questionArray) {
    // Shuffle the options for each question individually
    for (let i = 0; i < questionArray.length; i++) {
        const questionData = questionArray[i];
        const shuffledOptions = [...questionData.options];
        shuffleArray(shuffledOptions);
        questionData.options = shuffledOptions; // Update the options for the question
    }

    // Shuffle the question array randomly
    for (let i = questionArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
    }
}
function nextQuestion() {
    // Reset button styles and enable them for the new question
    option1Button.style.backgroundColor = "";
    option2Button.style.backgroundColor = "";
    option1Button.disabled = false;
    option2Button.disabled = false;
    resetButtonStyles(); // Call this function to reset the styles

    if (currentQuestionIndex < totalQuestions) {
        const questionData = levels[currentLevel][currentQuestionIndex];
        questionText.textContent = questionData.question;

        // Shuffle the options array randomly
        const shuffledOptions = [...questionData.options];
        shuffleArray(shuffledOptions);

        option1Button.textContent = shuffledOptions[0];
        option2Button.textContent = shuffledOptions[1];
        resultText.textContent = "";
        isAnswerSelected = false; // Allow the user to select an answer again
        startTimer();
        currentQuestionIndex++;
        questionsLeftText.textContent = `Questions left: ${totalQuestions - currentQuestionIndex}`;
        scoreText.textContent = `Score: ${score}/${currentQuestionIndex - 1}`; // Display the score
    } else {
        // Game over, show final screen
        showFinalScreen();
    }
}


function showFinalScreen() {
    clearInterval(timer); // Stop the timer
    gameScreen.style.display = "none";
    finalScreen.style.display = "block";
    finalScoreText.textContent = score;
}

function restartGame() {
    clearInterval(timer); // Stop the timer
    finalScreen.style.display = "none";
    welcomeScreen.style.display = "block";
    currentQuestionIndex = 0; // Reset question index
    score = 0; // Reset score
    scoreText.textContent = "0"; // Reset score display
}

function checkAnswer(selectedOption) {
    if (isAnswerSelected) {
        return; // Do nothing if an answer is already selected
    }

    clearInterval(timer); // Stop the timer
    isAnswerSelected = true; // Mark that an answer is selected

    const questionData = levels[currentLevel][currentQuestionIndex - 1];
    let selectedButton = selectedOption === option1Button.textContent ? option1Button : option2Button;
    let otherButton = selectedButton === option1Button ? option2Button : option1Button;

    if (selectedOption === questionData.correctAnswer) {
        resultText.textContent = "Correct!";
        resultText.style.color = "green";
        selectedButton.style.backgroundColor = "green"; // Green background for correct answer
        score++; // Increase the score for a correct answer
    } else {
        resultText.textContent = `Wrong! The correct answer is: ${questionData.correctAnswer}`;
        resultText.style.color = "red";
        selectedButton.style.backgroundColor = "red"; // Red background for incorrect answer
    }

    // Disable the other button
    otherButton.disabled = true;

    setTimeout(() => {
        nextQuestion();
        selectedButton.style.backgroundColor = ""; // Reset color for next question
        otherButton.style.backgroundColor = ""; // Reset color for the other button
        otherButton.disabled = false; // Enable the other button
    }, 2000); // Delay before moving to the next question

    // Update the score display to stay within 0 to 10
    scoreText.textContent = `Score: ${Math.min(10, score)}`;
}



function startTimer() {
    let timeRemaining = questionTime;
    timerText.textContent = `${timeRemaining} seconds`;

    timer = setInterval(function () {
        timeRemaining--;
        timerText.textContent = `${timeRemaining} seconds`;

        if (timeRemaining === 0) {
            clearInterval(timer);
            timeRanOut(); // Call a new function when time runs out
        }
    }, 1000);
}

option1Button.addEventListener("click", () => checkAnswer(option1Button.textContent));
option2Button.addEventListener("click", () => checkAnswer(option2Button.textContent));

document.getElementById("easy").addEventListener("click", () => startGame("easy"));
document.getElementById("medium").addEventListener("click", () => startGame("medium"));
document.getElementById("difficult").addEventListener("click", () => startGame("difficult"));
document.getElementById("exit-game").addEventListener("click", exitGame);
playAgainButton.addEventListener("click", restartGame);

function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function exitGame(event) {
    event.preventDefault(); // Prevent default hyperlink action
    clearInterval(timer); // Stop the timer
    gameScreen.style.display = "none"; // Hide game screen
    welcomeScreen.style.display = "block"; // Show welcome screen
    currentQuestionIndex = 0; // Reset question index
    score = 0; // Reset score
    scoreText.textContent = "0"; // Reset score display
}

function timeRanOut() {
    isAnswerSelected = true; // Mark that an answer is selected

    const questionData = levels[currentLevel][currentQuestionIndex - 1];
    resultText.textContent = `Time's off! The correct answer is: ${questionData.correctAnswer}`;
    resultText.style.color = "orange"; // Use a different color for time-out message

    setTimeout(() => {
        nextQuestion();
        resultText.style.color = ""; // Reset color for next question
    }, 2000); // Delay before moving to the next question
}

function resetButtonStyles() {
    option1Button.style.backgroundColor = "";
    option2Button.style.backgroundColor = "";
    option1Button.style.color = "";
    option2Button.style.color = "";
    option1Button.disabled = false;
    option2Button.disabled = false;
    // Reset any other style changes you've made to the buttons
}
