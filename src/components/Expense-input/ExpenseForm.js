import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setenteredTitle] = useState('')
    const [amount, setenteredAmount] = useState('')
    const [date, setenteredDate] = useState('')

    const titleHandler = (event) => {
        // console.log(event.target.value)
        setenteredTitle(event.target.value)
    }
    const amountHandler = (event) => {
        // console.log(event.target.value)
        setenteredAmount(event.target.value)
    }
    const dateHandler = (event) => {
        // console.log(event.target.value)
        setenteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__contorls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleHandler} placeholder='Enter your title here' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={amount} onChange={amountHandler} placeholder='Enter the Amount' />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={date} onChange={dateHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>

                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;