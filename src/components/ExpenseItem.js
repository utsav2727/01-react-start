import React, { useState } from 'react';
import './ExpenseItem.css'
// import '../components/Expensedate'
import Expensedate from '../components/Expensedate';
function ExpenseItem(props) {

    const [title, chnagedtitle] = useState(props.title);
    const chnageTitle = () => {
        chnagedtitle('Updated!!!')
        console.log(title);
    }

    return (
        <div className='center-div'>
            <div className="expense-item">
                <Expensedate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount}$</div>
                    <button onClick={chnageTitle} >chnage</button>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;