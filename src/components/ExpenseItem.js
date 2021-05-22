import './ExpenseItem.css'
// import '../components/Expensedate'
import Expensedate from '../components/Expensedate';
function ExpenseItem(props) {


    return (
        <div className='center-div'>
            <div className="expense-item">
                <Expensedate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}$</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;