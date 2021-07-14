import '../../scss/expense-item.scss'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return(
        <li>
            <Card className="expense-item">
            <ExpenseDate expenseDate={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">&#8377;{props.amount}</div>
            </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;