import React, { useState, useEffect } from 'react';
import '../App.css';

const StartQuiz = () => {
  const questions = [
    { question: "How do you say 'Hello' in Spanish?", options: ["Hola", "Bonjour", "Ciao", "Guten Tag"], answer: "A" },
    { question: "What is the Spanish word for 'thank you'?", options: ["Gracias", "Merci", "Danke", "Arigato"], answer: "A" },
    { question: "How do you say 'Good morning' in Spanish?", options: ["Buenas tardes", "Buenos días", "Buenas noches", "Hola"], answer: "B" },
    { question: "What is the Spanish word for 'apple'?", options: ["Banana", "Manzana", "Pera", "Uva"], answer: "B" },
    { question: "What does '¿Cómo estás?' mean in English?", options: ["How old are you?", "Where are you from?", "How are you?", "What is your name?"], answer: "C" },
    { question: "Which of these is the correct way to say 'I am from Spain' in Spanish?", options: ["Yo soy de España", "Yo estoy de España", "Yo vivo en España", "Yo soy en España"], answer: "A" },
    { question: "How do you say 'Please' in Spanish?", options: ["Por favor", "Danke", "S'il vous plaît", "Per favore"], answer: "A" },
    { question: "What is the Spanish word for 'book'?", options: ["Libro", "Revista", "Periódico", "Cuaderno"], answer: "A" },
    { question: "How do you say 'Good night' in Spanish?", options: ["Buenas tardes", "Buenas noches", "Buenos días", "Hola"], answer: "B" },
    { question: "What is the correct translation of 'I don't understand' in Spanish?", options: ["No entiendo", "No sé", "No hablo", "No quiero"], answer: "A" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const [timer, setTimer] = useState(5); // 5 seconds countdown
  const [timeOut, setTimeOut] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null); // Track selected answer
  const [answerStatus, setAnswerStatus] = useState(null); // Track whether the answer was correct or incorrect
  const [correctAnswer, setCorrectAnswer] = useState(null); // Track the correct answer to reveal it

  useEffect(() => {
    if (showQuestion && !timeOut) {
      const intervalId = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setTimeOut(true);
            setTimeout(() => {
              handleNextQuestion();
            }, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [showQuestion, timeOut]);

  const handleStartQuiz = (stage) => {
    setSelectedStage(stage);
    setShowQuestion(true);
    setTimer(5);
    setTimeOut(false);
    setUserAnswer(null);
    setAnswerStatus(null);
    setCorrectAnswer(null); // Reset the correct answer at the start of a new quiz
  };

  const handleAnswerSelection = (selectedOption) => {
    setUserAnswer(selectedOption);
    setCorrectAnswer(questions[currentQuestion].answer); // Reveal the correct answer
    if (selectedOption === questions[currentQuestion].answer) {
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('incorrect');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer(null);
      setAnswerStatus(null);
      setCorrectAnswer(null); // Reset the correct answer
      setTimer(5);
      setTimeOut(false);
    } else {
      alert("You've completed the quiz!");
    }
  };

  return (
    <div className="quiz-container">
      {!showQuestion ? (
        <>
          <h1 className="quiz-title">Let's Start?</h1>
          <p className="quiz-encouragement">Challenge yourself and test your language knowledge! Ready to begin?</p>
          <div className="stage-buttons">
            <button className="quiz-button" onClick={() => handleStartQuiz('Easy')}>Easy</button>
            <button className="quiz-button" onClick={() => handleStartQuiz('Medium')}>Medium</button>
            <button className="quiz-button" onClick={() => handleStartQuiz('Hard')}>Hard</button>
          </div>
        </>
      ) : (
        <div className="mcq-container">
          <h2 className="mcq-question">{`Q${currentQuestion + 1}: ${questions[currentQuestion].question}`}</h2>
          <div className="mcq-options">
            {questions[currentQuestion].options.map((option, index) => {
              const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
              const isSelected = userAnswer === optionLetter;
              const isCorrect = correctAnswer === optionLetter && !isSelected;
              const isIncorrect = answerStatus === 'incorrect' && userAnswer === optionLetter;

              return (
                <button
                  key={index}
                  className={`mcq-option ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                  onClick={() => handleAnswerSelection(optionLetter)}
                  disabled={!!userAnswer} // Disable options after selecting an answer
                >
                  {optionLetter}) {option}
                </button>
              );
            })}
          </div>

          <p className="stage-info">Stage: {selectedStage}</p>

          <div className="timer-container">
            <div
              className={`timer-circle ${timeOut ? 'time-out' : ''}`}
              style={{
                background: timeOut ? 'red' : timer <= 3 ? 'yellow' : 'green',
              }}
            >
              {timer} s
            </div>
          </div>

          {timeOut && <p className="time-out-message">Time Out!</p>}

          <button 
            className="next-button" 
            onClick={handleNextQuestion} 
            disabled={!userAnswer && !timeOut} // Disable Next button if no answer or time out
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default StartQuiz;
