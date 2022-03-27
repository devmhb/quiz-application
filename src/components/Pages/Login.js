import React from "react";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../styles/login.module.css";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login} form`}>
          <TextInput type="text" placeholder="Enter email" />
          <TextInput type="password" placeholder="Enter password" />
          <Button>Submit Now</Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
