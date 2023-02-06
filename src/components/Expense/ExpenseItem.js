import ExpenseTitle from "./ExpenseTitle";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const[title, setTitle] = useState(props.title);
  const[amount, setAmount] = useState(props.amount);
  const handleTitle = () => {
    setTitle('Updated')
    console.log("clicked");
  };
  const handleAmount = () => {
    setAmount('100$')
    console.log("clicked");
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseTitle title={title} />
      <ExpenseDetails amount={amount} />
      <button onClick={handleTitle}>Change Title</button>
      <button onClick={handleAmount}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;