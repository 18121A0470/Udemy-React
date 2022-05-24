// import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
function Expenses(props){
    return(<div className="expenses">
        <div>{props.amount}</div>
        </div>);
}
export default Expenses;