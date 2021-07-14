import '../../scss/expense-list.scss';
import ExpenseItem from './ExpenseItem';
const ExpenseList = (props) => {
    if(props.list.length === 0) {
        return <p className="expenses-list__fallback">No expenses for the selected year</p>
    }

    return (
        <ul className="expenses-list">
        {props.list.map((item) => (
                <ExpenseItem 
                    key={item.id} 
                    title={item.title} 
                    amount={item.amount} 
                    date={item.date}
                />
            ))}
        </ul>
    )
}
export default ExpenseList;