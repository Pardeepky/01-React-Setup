import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const day = props.date.toLocaleString("en-us", { day: "2-digit" });
    const month = props.date.toLocaleString("en-us", { month: "long" });
    const year = props.date.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div className="expense-date__day">{day} </div>
                <div className="expense-date__month">{month} </div>
                <div className="expense-date__year">{year}</div>
            </div>
        </div>
    )
}

export default ExpenseDate