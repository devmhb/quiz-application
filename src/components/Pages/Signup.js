import React from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../styles/signup.module.css";
import TextInput from "../TextInput";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup} form`}>
          <TextInput type="text" placeholder="Enter  name" />
          <TextInput type="email" placeholder="Enter  email" />
          <TextInput type="password" placeholder="Enter password" />
          <TextInput type="password" placeholder="Confirm password" />
          <Checkbox
            type="checkbox"
            text="I agree to the Terms &amp; Conditions"
          />
          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
