import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = expensesData.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;