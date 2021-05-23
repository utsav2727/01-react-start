import React from 'react';
import ExpenseForm from './ExpenseForm'
import './ExpenseInput.css'

const ExpenseInput = (props) => {
    const onSaveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onaddExpense(expenseData);
    };


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
};

export default ExpenseInput;