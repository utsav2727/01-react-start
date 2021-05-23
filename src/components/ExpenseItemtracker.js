import React, { useState } from 'react';
import ExpensesFilter from './Expense-filter/ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpenseItem.css'

const Expenseitemtracker = (props) => {
    const [initialyear, selectedYear] = useState('2020');
    const selectedFilterHandler = (data) => {
        // console.log('tracker');
        // console.log(data);
        selectedYear(data)
    }

    const filteredExpense = props.expenses.filter(
        (expense) => {
            // console.log(expense.date.getFullYear());
            return expense.date.getFullYear().toString() === initialyear;
        }
    )
    let expenseContent = <p>No record found</p>
    if (initialyear === 'no filter') {
        expenseContent = props.expenses.map((expense) => {
            return (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>)
        });
    } else if (filteredExpense.length > 0) {
        expenseContent = filteredExpense.map((expense) => {
            return (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} ></ExpenseItem>);
        });
    }

    return (
        <div className='center-div'>
            <ExpensesFilter selectedYear={initialyear} onselectedFilter={selectedFilterHandler} />
            {expenseContent}
        </div>
    );
}

export default Expenseitemtracker;