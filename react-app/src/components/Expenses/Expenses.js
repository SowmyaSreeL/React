import { useState } from 'react';
import '../../scss/expenses.scss'
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onSelectingYearHandler = (yearSelected) => {
        setFilteredYear(yearSelected);
    }

    const filteredExpenses = props.expenseItem.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectingYear={onSelectingYearHandler}/>
                <ExpenseList list={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;