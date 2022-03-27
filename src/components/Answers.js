import React from "react";
import Checkbox from "./Checkbox";
import Classes from "./styles/Answers.module.css";

const Answers = () => {
  return (
    <>
      <div className={Classes.answers}>
        <Checkbox
          type="checkbox"
          className={Classes.answer}
          text="This is for test"
        />
      </div>
    </>
  );
};

export default Answers;
