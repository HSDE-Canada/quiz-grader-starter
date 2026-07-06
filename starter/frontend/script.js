const scoreCircle = document.querySelector("#score-circle");
const scorePercentage = document.querySelector("#score-percentage");
const scoreStats = document.querySelector("#score-stats");
const feedbackMessage = document.querySelector("#feedback-message");

// Challenge 1: Personalize this quiz. Change the questions and answer choices.
const quizQuestions = [
    { question: "Write your first quiz question here.", choices: ["Choice A", "Choice B", "Choice C", "Choice D"], correctAnswer: "Choice A" },
    { question: "Write your second quiz question here.", choices: ["Choice A", "Choice B", "Choice C", "Choice D"], correctAnswer: "Choice B" },
    { question: "Write your third quiz question here.", choices: ["Choice A", "Choice B", "Choice C", "Choice D"], correctAnswer: "Choice C" },
    { question: "Write your fourth quiz question here.", choices: ["Choice A", "Choice B", "Choice C", "Choice D"], correctAnswer: "Choice D" },
    { question: "Write your fifth quiz question here.", choices: ["Choice A", "Choice B", "Choice C", "Choice D"], correctAnswer: "Choice A" }
];

let currentQuestionIndex = 0;
let selectedAnswers = [];

const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progressBar");
const questionText = document.querySelector("#question-text");
const optionsContainer = document.querySelector("#options-container");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    progressLabel.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    currentQuestion.choices.forEach(function (choice, index) {
        const button = document.createElement("button");
        button.classList.add("option-button");
        if (selectedAnswers[currentQuestionIndex] === choice) button.classList.add("selected");
        button.innerHTML = `<strong>${String.fromCharCode(65 + index)}</strong><span>${choice}</span>`;
        button.addEventListener("click", function () {
            selectedAnswers[currentQuestionIndex] = choice;
            displayQuestion();
        });
        optionsContainer.appendChild(button);
    });

    previousButton.style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
    nextButton.textContent = currentQuestionIndex === quizQuestions.length - 1 ? "Submit" : "Next";
}

async function gradeQuiz() {
    // Challenge 3: Create a variable named response that sends selectedAnswers to the server with a POST request.

    // Challenge 5: Create a variable named data that stores the JSON version of the server response.

    // Challenge 6: Display the percentage from the server response.
    scorePercentage.textContent = ;

    // Challenge 7: Display the score and total from the server response.
    scoreStats.textContent = ;

    // Challenge 8: Display the feedback message from the server response.
    feedbackMessage.textContent = ;

    // Challenge 9: Use the percentage from the server response to update the circular score graphic.
    scoreCircle.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#6c38ff ${}%, #e5e7f0 0)`;
}

previousButton.addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex = currentQuestionIndex - 1;
        displayQuestion();
    }
});

nextButton.addEventListener("click", function () {
    if (!selectedAnswers[currentQuestionIndex]) {
        alert("Please choose an answer before continuing.");
        return;
    }
    if (currentQuestionIndex === quizQuestions.length - 1) {
        gradeQuiz();
    } else {
        currentQuestionIndex = currentQuestionIndex + 1;
        displayQuestion();
    }
});

displayQuestion();
