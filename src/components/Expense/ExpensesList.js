import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {

    if (props.items.length === 0) {
            return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>
        }

    return (
        <ul className='expense-list'>
            {props.items.map((element) => {
                return (
                    <ExpenseItem
                        key={element.id}
                        title={element.title}
                        amount={element.amount}
                        date={element.date}
                    />
                );
            })}
            {props.items.length ===1 ? <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2> : ''}
        </ul>
    )
}

export default ExpensesList