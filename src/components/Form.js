import React from "react";
import classes from "./styles/form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <>
      <form className={`${className} ${classes.form}`} action="#">
        {children}
      </form>
    </>
  );
};

export default Form;
