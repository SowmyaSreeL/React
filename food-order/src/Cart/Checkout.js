import './checkout.css';
import useInput from '../hooks/use-input';

const Checkout = props => {
    const validator = (value) => {
        return value.trim() !== '';
    }

    const postalValidator = (value) => {
        return value.trim().length <= 6;
    }
    const {
        value: name,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurhandler,
        isValid: nameIsValid,
        hasErr: nameHasErr,
        reset: resetName
    } = useInput(validator);

    const {
        value: street,
        valueChangeHandler: streetChangeHandler,
        valueBlurHandler: streetBlurhandler,
        isValid: streetIsValid,
        hasErr: streetHasErr,
        reset: resetStreet
    } = useInput(validator);

    const {
        value: postal,
        valueChangeHandler: postalChangeHandler,
        valueBlurHandler: postalBlurhandler,
        isValid: postalIsValid,
        hasErr: postalHasErr,
        reset: resetPostal
    } = useInput(postalValidator);

    const {
        value: city,
        valueChangeHandler: cityChangeHandler,
        valueBlurHandler: cityBlurhandler,
        isValid: cityIsValid,
        hasErr: cityHasErr,
        reset: resetCity
    } = useInput(validator);

    const formIsValid = nameIsValid && cityIsValid && postalIsValid && streetIsValid;
    const confirmHandler = (e) => {
        e.preventDefault();

        if(!formIsValid)
            return
        props.onConfirmOrder({name,city,street,postal})

        resetName();
        resetStreet();
        resetPostal();
        resetCity();
    }

    return <form>
        <div className={`control ${nameHasErr ? 'invalid' : '' }`}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurhandler} value={name}></input>
            {nameHasErr && <p className="error-text">Please Enter a valid name</p>}
        </div>
        <div className={`control ${streetHasErr ? 'invalid' : '' }`}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" onChange={streetChangeHandler} onBlur={streetBlurhandler} value={street}></input>
            {streetHasErr && <p className="error-text">Please Enter a valid street</p>}
        </div>
        <div className={`control ${postalHasErr ? 'invalid' : '' }`}>
            <label htmlFor="postal">Postal Code</label>
            <input type="number" id="postal" onChange={postalChangeHandler} onBlur={postalBlurhandler} value={postal}></input>
            {postalHasErr && <p className="error-text">Please Enter a valid postal (less then 6 chars)</p>}
        </div>
        <div className={`control ${cityHasErr ? 'invalid' : '' }`}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" onChange={cityChangeHandler} onBlur={cityBlurhandler} value={city}></input>
            {cityHasErr && <p className="error-text">Please Enter a valid city</p>}
        </div>
        <div className="actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button onClick={confirmHandler} className="submit" disabled={!formIsValid}>Confirm</button>
        </div>
        
    </form>
}

export default Checkout;