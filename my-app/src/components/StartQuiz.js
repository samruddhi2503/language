import React, { useState } from 'react';
import '../App.css';

const StartQuiz = () => {
  // List of 10 questions
  const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "Rome"], answer: "B" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"], answer: "A" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "B" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "D" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "B" },
    { question: "Who is the CEO of Tesla?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], answer: "B" },
    { question: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "Australia"], answer: "B" },
    { question: "Which animal is known as the King of the Jungle?", options: ["Lion", "Tiger", "Elephant", "Cheetah"], answer: "A" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], answer: "B" },
    { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "Chicago", "New York", "San Francisco"], answer: "C" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);

  const handleStartQuiz = (stage) => {
    setSelectedStage(stage); // Set the selected stage (Easy, Medium, or Hard)
    setShowQuestion(true); // Start the quiz when "Let's Go" is clicked
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1); // Move to the next question
    } else {
      // Handle end of quiz (could navigate to result page or display a message)
      alert("You've completed the quiz!");
    }
  };

  return (
    <div className="quiz-container">
      {!showQuestion ? (
        <>
          <h1 className="quiz-title">Let's Start?</h1>
          <p className="quiz-encouragement">
            Challenge yourself and see how much you know! Ready to test your skills?
          </p>

          <div className="stage-buttons">
            <button className="quiz-button" onClick={() => handleStartQuiz('Easy')}>
              Easy
            </button>
            <button className="quiz-button" onClick={() => handleStartQuiz('Medium')}>
              Medium
            </button>
            <button className="quiz-button" onClick={() => handleStartQuiz('Hard')}>
              Hard
            </button>
          </div>
        </>
      ) : (
        <div className="mcq-container">
          <h2 className="mcq-question">{questions[currentQuestion].question}</h2>
          <div className="mcq-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} className="mcq-option">
                {String.fromCharCode(65 + index)}) {option} {/* Dynamically displaying A), B), C), D) */}
              </button>
            ))}
          </div>
          {/* Display the selected stage at the top */}
          <p className="stage-info">Stage: {selectedStage}</p>

          {/* Next Button */}
          <button className="next-button" onClick={handleNextQuestion}>
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default StartQuiz;
