import useInput from "./hooks/use-input";

const BasicForm = (props) => {

  const {value: firstName,
    valueChangeHandler: fnameChangeHandler,
    valueBlurHandler: fnameBlurHandler,
    isValid: fnameValid,
    hasErr: fnameHasErr,
    reset: resetFname
  } = useInput(value => value.trim() !== '');

  const {value: lastName,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHandler: lnameBlurHandler,
    isValid: lnameValid,
    hasErr: lnameHasErr,
    reset: resetLname} = useInput(value => value.trim() !== '');

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const {value: email,
      valueChangeHandler: emailChangeHandler,
      valueBlurHandler: emailBlurHandler,
      isValid: emailValid,
      hasErr: emailHasErr,
      reset: resetEmail} = useInput(value => mailFormat.test(value));


    let formValid = false;

    if(fnameValid && lnameValid && emailValid)
      formValid = true;
    
    const formSubmitHandler = e => {
      e.preventDefault();

      if(!fnameValid || !lnameValid || emailValid)
        return;

      
      resetFname();
      resetLname();
      resetEmail();
    }

  return (
    <form>
      <div className='control-group' onSubmit={formSubmitHandler}>
        <div className={`form-control ${fnameHasErr ? 'invalid' : ''} `}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={fnameChangeHandler} onBlur={fnameBlurHandler} value={firstName} />
          {fnameHasErr && <p className="error-text">First Name can't be empty</p>}
        </div>
        <div className={`form-control ${lnameHasErr ? 'invalid' : ''} `}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lnameChangeHandler} onBlur={lnameBlurHandler} value={lastName} />
          {lnameHasErr && <p className="error-text">Last Name can't be empty</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasErr ? 'invalid' : ''} `}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onBlur={emailBlurHandler} value={email} onChange={emailChangeHandler} />
        {emailHasErr && <p className="error-text">Email can't be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
