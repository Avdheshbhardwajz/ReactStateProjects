import React from "react";
import { useState } from "react";

const App = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the tallest mammal?",
      options: ["Elephant", "Giraffe", "Horse", "Lion"],
      correctAnswer: "Giraffe",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Leo Tolstoy",
      ],
      correctAnswer: "William Shakespeare",
    },
  ];
  const [indexx, setindex] = useState(0);
  const [question, setquestion] = useState(questions[indexx]);
  const [score, setscore] = useState(0);
  const [lock, setlock] = useState(false);
  const [result, setresult] = useState(false);

  let checkAns = (e, index) => {
    if (!lock) {
      if (question.correctAnswer == question.options[index]) {
        setscore(score + 1);
        // alert("right answer");

        setlock(true);
      } else {
        // alert("wrong answer");
        setlock(true);
      }
    }
  };

  let next = () => {
    setindex((prevIndex) => prevIndex + 1);

    if (indexx + 1 >= questions.length) {
      setresult(true);
    } else {
      setquestion(questions[indexx + 1]);
      setlock(false);
    }
    console.log(score);
  };

  let reset = () => {
    setindex((prev) => 0);
    setquestion(questions[0]);
    setscore(0);
    setlock(false);
    setresult(false);
  };
  return (
    <div className=" text-2xl text-white font-poppins flex flex-col justify-around items-center w-[600px] border-2 border-white h-[400px]">
      {result ? (
        <>
          <h2> {`You Scored ${score} out of ${questions.length}`}</h2>
          <button className="border-white border-2 p-4" onClick={reset}>
            Reset
          </button>
        </>
      ) : (
        <>
          <h2>
            {`Q-${indexx + 1}`} {`${question.question}`}
          </h2>
          <div className=" grid grid-cols-2 grid-rows-2 gap-4">
            {question.options.map((option, index) => (
              <button
                onClick={(e) => {
                  checkAns(e, index);
                }}
                key={index}
                className="border-2 border-white fill-transparent p-4 "
              >
                {option}
              </button>
            ))}
          </div>

          <button
            className="border-2 border-white fill-transparent p-4"
            onClick={next}
          >
            Next
          </button>

          <p className=" text-lg">
            {`You are on question ${indexx + 1} out of ${questions.length}`}
          </p>
        </>
      )}
    </div>
  );
};

export default App;
