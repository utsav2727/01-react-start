import React from 'react';
import ExpenseForm from './ExpenseForm'
import './ExpenseInput.css'

const ExpenseInput = () => {
    const onSaveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        console.log(expenseData);
    };


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
};

export default ExpenseInput;