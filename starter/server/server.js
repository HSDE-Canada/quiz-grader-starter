const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Challenge 2:
// Replace these sample correct answers with the correct answers for your personalized quiz.
// The order must match the order of your quiz questions in frontend/script.js.
const correctAnswers = [
    "Choice A",
    "Choice B",
    "Choice C",
    "Choice D",
    "Choice A"
];

// Challenge 4:
// Write a POST request handler that grades the quiz answers sent by the frontend.
//
// Your request handler should:
// - listen for POST requests at /grade-quiz
// - read the submitted answers from the request body
// - check that the answers array exists and has the correct length
// - start the score at 0
// - loop through the submitted answers
// - compare each submitted answer to the correct answer at the same index
// - increase the score when an answer is correct
// - calculate the total number of questions
// - calculate the percentage score
// - choose a feedback message based on the score
// - send a JSON response with score, total, percentage, and message
//
// Write your route handler below this line.

app.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
});
