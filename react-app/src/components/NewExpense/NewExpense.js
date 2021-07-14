import '../../scss/new-expense.scss';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [flag, setFlag] = useState(false);

    const onEnteringNewExpenseHandler = (addedExpense) => {
        const newExpense = {
            ...addedExpense,
            id: Math.random()
        }

        props.addingEnteredExpense(newExpense);
        setFlag(false);
    }

    const startEditingHandler = () => {
        setFlag(true);
    }

    const stopEditingHandler = () => {
        setFlag(false);
    }

    return(
        <div className = "new-expense">
            {
                !flag && (
                <div className="new-expense__actions">
                    <button type="button" onClick={startEditingHandler}>Add New Expense</button>
                </div>)
            }
            {
                flag && (
                    <ExpenseForm 
                        onEnteringNewExpense={onEnteringNewExpenseHandler} 
                        onCancel={stopEditingHandler}
                    />
                )
            }
        </div>
    )
}

export default NewExpense;