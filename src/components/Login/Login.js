import React, { useEffect, useReducer, useState } from "react";

import "./Login.css";
import Button from "../../UI/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "IN_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "IN_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

function Login(props) {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  // this function for the input validation and according to that we change the input color
  const validateEmailHandler = () => {
    dispatchEmail({ type: "IN_BLUR" });
  };

  // this function for the input validation and according to that we change the input color
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "IN_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div
          className={`${emailState.isValid === false ? "invalid" : "control"}`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={emailState.value}
            onChange={emailHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${
            passwordState.isValid === false ? "invalid" : "control"
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={passwordState.value}
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
