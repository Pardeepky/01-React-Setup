import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date(2023, 2, 5);
    const expenseTitle = 'Food';
    const expenseAmount = 10;
    const LocationOfExpenditure = 'Delhi'

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2><h2>{LocationOfExpenditure}</h2>
                <div className='expense-item__price'>Rs {expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem