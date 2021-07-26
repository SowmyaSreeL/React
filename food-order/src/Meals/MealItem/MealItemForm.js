import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] =  useState(true)
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enterdAmount = amountInputRef.current.value;
        const enteredAmountNum = +enterdAmount;

        if(enterdAmount.trim().length === 0 || enteredAmountNum < 1) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNum);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="amount" input={{
                type: 'number',
                id: 'amount',
                min: '1',
                step: '1',
                defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm;