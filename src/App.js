import Expenses from "./components/Expense/Expenses";
import ExpenseForm from "./components/Expense/ExpenseForm";
import { useState } from "react";
import "./components/Expense/NewExpense.css";

const App = () => {
  const [expensesData, setExpensesData] = useState([]);

  const addExpenseHandler = (expense) => {
    let newExpense = {
      ...expense, id: Math.random().toString()
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