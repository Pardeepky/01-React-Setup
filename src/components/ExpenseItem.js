import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={props.title} />
    </div>
  );
}

export default ExpenseItem