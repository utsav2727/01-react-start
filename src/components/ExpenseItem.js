import React from 'react';
import './ExpenseItem.css'
// import '../components/Expensedate'
import Expensedate from '../components/Expensedate';
function ExpenseItem(props) {

    // const [title, chnagedtitle] = useState(props.title);
    // const chnageTitle = () => {
    //     chnagedtitle('Updated!!!')
    //     console.log(title);
    // }
    const title = props.title;
    return (
        <div className="expense-item">
            <Expensedate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}$</div>
                {/* <button onClick={chnageTitle} >chnage</button> */}
            </div>
        </div>
    )
}

export default ExpenseItem;