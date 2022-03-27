import React from "react";
import signupImg from "../assets/images/signup.svg";
import classes from "./styles/illustration.module.css";

const Illustration = () => {
  return (
    <>
      <div className={classes.illustration}>
        <img src={signupImg} alt="Signup/login" />
      </div>
    </>
  );
};

export default Illustration;
