import React, { useState } from "react";

const questions = [
  {
    id: 1,
    questionText: "quest 1",
    options: [
      {
        id: 1,
        answerText: "ans 1",
        isCorrect: false,
      },
      {
        id: 2,
        answerText: "ans 2",
        isCorrect: true,
      },
      {
        id: 3,
        answerText: "ans 3",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "ans 4",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    questionText: "quest 2",
    options: [
      {
        id: 1,
        answerText: "ans 1",
        isCorrect: false,
      },
      {
        id: 2,
        answerText: "ans 2",
        isCorrect: true,
      },
      {
        id: 3,
        answerText: "ans 3",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "ans 4",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    questionText: "quest 3",
    options: [
      {
        id: 1,
        answerText: "ans 1",
        isCorrect: false,
      },
      {
        id: 2,
        answerText: "ans 2",
        isCorrect: true,
      },
      {
        id: 3,
        answerText: "ans 3",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "ans 4",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    questionText: "quest 4",
    options: [
      {
        id: 1,
        answerText: "ans 1",
        isCorrect: false,
      },
      {
        id: 2,
        answerText: "ans 2",
        isCorrect: true,
      },
      {
        id: 3,
        answerText: "ans 3",
        isCorrect: false,
      },
      {
        id: 4,
        answerText: "ans 4",
        isCorrect: false,
      },
    ],
  },
];
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const handleClick = (selectedAnswerObject) => {
    if (selectedAnswerObject.isCorrect) setScore((prev) => prev + 1);
    if (currentQuestionIndex + 1 === questions.length)
      return setIsQuizEnded(true);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Quiz app</h1>
      {isQuizEnded ? (
        <div>
          <p>Quiz Ended</p>
          <p>
            You scored {score}/{questions.length}
          </p>
        </div>
      ) : (
        <>
          <div>
            <div>
              <p>
                Question {currentQuestionIndex + 1} / {questions.length}
              </p>
              <p>{questions[currentQuestionIndex].questionText}</p>
            </div>
            <div>
              <p>Options</p>
              <ul>
                {questions[currentQuestionIndex].options.map((item) => (
                  <li key={`${item.id}_${questions[currentQuestionIndex].id}`}>
                    <button onClick={() => handleClick(item)}>
                      {item.answerText}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
