import React, { useState } from 'react'
// import ExpenseItem from './components/ExpenseItem';
import Expenseitemtracker from './components/ExpenseItemtracker'
import ExpenseInput from './components/Expense-input/ExpenseInput'

const dummay_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummay_expenses)

  const addExpenseHandler = (data) => {
    console.log("in app.js");
    console.log(data);
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses]
    })

  }
  return (
    <div>
      <ExpenseInput onaddExpense={addExpenseHandler} />
      <Expenseitemtracker expenses={expenses} />

    </div>
  );
}

export default App;
