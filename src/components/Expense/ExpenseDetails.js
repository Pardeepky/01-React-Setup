import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  const amount = props.amount;

  return (
    <div>
      <div className="expense-item__price"> Rs {amount}</div>
    </div>
  );
}
export default ExpenseDetails;