import { useState } from "react";
import "./event.css";

function Event() {
  const messages = ["Learn React", "Apply for job", "Earn"];
  let [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(true);

  function previous() {
    if (step > 1) setStep(step - 1);
  }

  function next() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <div className="close" onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? "X" : "O"}</span>
      </div>

      {isOpen && (
        <div className="container">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <div className="message">
            Step {step}: {messages[step - 1]}
          </div>

          <div className="buttons">
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Event;
