import React from "react";
import succesImg from "../assets/images/success.png";
import Classes from "./styles/Summary.module.css";

const Summary = () => {
  return (
    <div className={Classes.summary}>
      <div className={Classes.point}>
        <p className={Classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={Classes.badge}>
        <img src={succesImg} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
