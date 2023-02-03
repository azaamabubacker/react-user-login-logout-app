import React, { useState } from "react";
import "./Login.css";
import Button from "../../UI/Button";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emaileHandler = (event) => {
    setEnteredEmail(event.target.value);

    // this setFormIsValid function we use for form validation,if its valid only button will be enable
    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);

    // this setFormIsValid function we use for form validation,if its valid only button will be enable
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  // this function for the input validation and according to that we change the input color
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  // this function for the input validation and according to that we change the input color
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className={`${emailIsValid === false ? "invalid" : "control"}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={enteredEmail}
            onChange={emaileHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${passwordIsValid === false ? "invalid" : "control"}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={enteredPassword}
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div>
          {/* disabled is a default button syntax to disable the button */}
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
