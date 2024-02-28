import { useState, useRef } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let OptionA = useRef(null);
  let OptionB = useRef(null);
  let OptionC = useRef(null);
  let OptionD = useRef(null);

  let option_array = [OptionA, OptionB, OptionC, OptionD];

  const checkAnswer = (e, answer) => {
    if (lock === false) {
      if (answer === question.answer) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.answer - 1].current.classList.add("correct");
      }
    }
  };
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setResult(false);
    setScore(0);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={OptionA}
              onClick={(e) => {
                checkAnswer(e, 1);
              }}
            >
              {question.optionA}
            </li>
            <li
              ref={OptionB}
              onClick={(e) => {
                checkAnswer(e, 2);
              }}
            >
              {question.optionB}
            </li>
            <li
              ref={OptionC}
              onClick={(e) => {
                checkAnswer(e, 3);
              }}
            >
              {question.optionC}
            </li>
            <li
              ref={OptionD}
              onClick={(e) => {
                checkAnswer(e, 4);
              }}
            >
              {question.optionD}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            ({index + 1} out of {data.length} questions)
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You scored {score} out of {data.length}!
          </h2>
          <button onClick={reset}>Try again!</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
