import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

let INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setNewExpense] = useState(INITIAL_EXPENSES);

  const addingEnteredExpense = (newExpense) => {
      setNewExpense(prevExpenses => {
        return [newExpense, ...prevExpenses];
      });
  }

  return (
    <div>
      <NewExpense addingEnteredExpense={addingEnteredExpense}/>
      <Expenses expenseItem={expenses} />
    </div>
  );
}

export default App;
