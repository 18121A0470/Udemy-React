import './ExpenseItem.css'
import Expenses from './Expenses';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expese-item__description">
                <h3>{props.title}</h3></div>
                <Expenses amount={props.amount}/>
        </div>
    )
}
export default ExpenseItem;