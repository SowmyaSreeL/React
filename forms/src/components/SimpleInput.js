import useInput from "./hooks/use-input";


const SimpleInput = (props) => {
  const {value: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    hasErr: nameHasErr,
    reset: resetName
  } = useInput(value => value.trim() !== '');

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    hasErr: emailHasErr,
    reset: resetEmail} = useInput(value => mailFormat.test(value));

  let formIsValid = false;

  if(nameIsValid && emailIsValid)
    formIsValid = true;

  const formSubmithandler = e => {
    e.preventDefault();

    if(!nameIsValid || !emailIsValid) {
      return;
    }

    resetName();
    resetEmail();
  }

  return (
    <form onSubmit={formSubmithandler}>
      <div className={`form-control ${nameHasErr ? 'invalid' : ''} `}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' onBlur={nameBlurHandler} id='name' value={enteredName} onChange={nameChangeHandler} />
        {nameHasErr && <p className="error-text">UserName can't be empty</p>}
      </div>
      <div className={`form-control ${emailHasErr ? 'invalid' : ''} `}>
        <label htmlFor='name'>Your Email</label>
          <input type='email' onBlur={emailBlurHandler} id='name' value={enteredEmail} onChange={emailChangeHandler} />
          {emailHasErr && <p className="error-text">Email can't be empty</p>}
        </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
