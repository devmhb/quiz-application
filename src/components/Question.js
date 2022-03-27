import React from "react";
import "./Answers";
import Answers from "./Answers";
import Classes from "./styles/Question.module.css";

const Question = () => {
  return (
    <>
      <div className={Classes.question}>
        <div className={Classes.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers />
      </div>
    </>
  );
};

export default Question;
