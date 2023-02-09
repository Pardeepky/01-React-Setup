import Expenses from "./components/Expense/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import { useState } from "react";
import "./components/NewExpense/NewExpense.css";

const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {
  const [expensesData, setExpensesData] = useState(expenses);

  const addExpenseHandler = (expense) => {
    let newExpense = {
      ...expense, id: Math.random().toString(), date: new Date(expense.date.split('-'))
    }
    setExpensesData(prev => [...prev, newExpense]);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="new-expense">
      <ExpenseForm addExpenseHandler={addExpenseHandler} />
      </div>
      <Expenses expensesData={expensesData} />
    </div>
  );
};

export default App