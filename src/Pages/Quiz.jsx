import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "./question";
("./question.js");

export default function Quiz() {
  // const questions = [
  // 	{
  // 	  questionText: 'What is the capital of France?',
  // 	  answerOptions: [
  // 		{ answerText: 'New York', isCorrect: false },
  // 		{ answerText: 'London', isCorrect: false },
  // 		{ answerText: 'Paris', isCorrect: true },
  // 		{ answerText: 'Dublin', isCorrect: false },
  // 	  ],
  // 	  description: 'Paris is the capital and most populous city of France.',
  // 	},
  // 	{
  // 	  questionText: 'Who is CEO of Tesla?',
  // 	  answerOptions: [
  // 		{ answerText: 'Jeff Bezos', isCorrect: false },
  // 		{ answerText: 'Elon Musk', isCorrect: true },
  // 		{ answerText: 'Bill Gates', isCorrect: false },
  // 		{ answerText: 'Tony Stark', isCorrect: false },
  // 	  ],
  // 	  description: 'Elon Musk is the CEO of Tesla, known for leading electric car innovation.',
  // 	},
  // 	{
  // 	  questionText: 'The iPhone was created by which company?',
  // 	  answerOptions: [
  // 		{ answerText: 'Apple', isCorrect: true },
  // 		{ answerText: 'Intel', isCorrect: false },
  // 		{ answerText: 'Amazon', isCorrect: false },
  // 		{ answerText: 'Microsoft', isCorrect: false },
  // 	  ],
  // 	  description: 'The iPhone was developed by Apple Inc, first released in 2007.',
  // 	},
  // 	{
  // 	  questionText: 'How many Harry Potter books are there?',
  // 	  answerOptions: [
  // 		{ answerText: '1', isCorrect: false },
  // 		{ answerText: '4', isCorrect: false },
  // 		{ answerText: '6', isCorrect: false },
  // 		{ answerText: '7', isCorrect: true },
  // 	  ],
  // 	  description: 'There are 7 books in the Harry Potter series, written by J.K. Rowling.',
  // 	},
  //   ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1); // Initialize to -1, indicating no answer selected
  const [answerDescription, setAnswerDescription] = useState("");

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswerIndex(index); // Set the selected answer index
    setAnswerDescription(questions[currentQuestion].description); // Set the description for the current question

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    setTimeout(() => {
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswerIndex(-1); // Reset selected answer index for the next question
        setAnswerDescription(""); // Clear the description for the next question
      } else {
        setShowScore(true);
      }
    }, 5000); // Move to next question after a delay
  };

  return (
    <div className="rapper">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="to-flex ">
              <div>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect, index)
                        }
                        className={
                          selectedAnswerIndex === index
                            ? answerOption.isCorrect
                              ? "correct"
                              : "incorrect"
                            : selectedAnswerIndex !== -1 &&
                              answerOption.isCorrect
                            ? "correct"
                            : ""
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="description-section">
                {selectedAnswerIndex !== -1 && <p>{answerDescription}</p>}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
