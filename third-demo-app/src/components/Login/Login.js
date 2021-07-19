import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/autho-context';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    }
  }

  if(action.type === 'USER_INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    }
  }
  return {
    value: '',
    isValid: 'false'
  }
}

const pwReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  }

  if(action.type === 'USER_INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }


  return {
    value: '',
    isValid: 'false'
  }
}

const Login = (props) => {
  const authorContext = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer,{
    value: '',
    isValid: null
  })

  const [pwState, dispatchPw] = useReducer(pwReducer, {
    value: '',
    isValid: null
  })

  const {isValid : emailIsValid} = emailState;
  const {isValid : pwIsValid} = pwState;

  useEffect(() => {
    setFormIsValid(
      emailIsValid && pwIsValid
    );
  }, [emailIsValid, pwIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    });

    //setFormIsValid(event.target.value.includes('@') && pwState.isValid)
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({
      type: 'USER_INPUT',
      val: event.target.value
    });

    //setFormIsValid(emailState.isValid && event.target.value.trim().length > 6)
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'USER_INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPw({
      type: 'USER_INPUT_BLUR'
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authorContext.onLogIn(emailState.value, pwState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pwState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
