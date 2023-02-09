import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const handleInputChange = (e) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addExpenseHandler(formData);
        setFormData({
            title: '',
            amount: '',
            date: '',
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Expense Amount</label>
                    <input type="text"
                        name="title"
                        id="title"
                        placeholder="Enter your title"
                        value={formData.title}
                        onChange={handleInputChange} />
                </div>
                <div className="new-expense__control">
                    <label>Expense Amount</label>
                    <input type="number"
                        name="amount"
                        id="amount"
                        placeholder="Enter your amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                        name="date"
                        id="date"
                        placeholder="Enter your date"
                        value={formData.date}
                        onChange={handleInputChange} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">AddExpense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm