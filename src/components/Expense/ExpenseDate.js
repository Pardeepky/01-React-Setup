import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const [year, month, day] = props.date.split('-')
  const monthName = new Date(2022, month - 1, 1).toLocaleString('default', { month: 'long' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{monthName}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;