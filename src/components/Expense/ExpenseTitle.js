import "./ExpenseItem.css";

const ExpenseTitle = (props) => {
  const title = props.title;
  return (
    <div>
      <div className="expesne-item__description">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default ExpenseTitle;