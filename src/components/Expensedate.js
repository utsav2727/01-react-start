import '../components/Expensedate.css'




const Expensedate = (props) => {
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    const currentmonth = month[props.date.getMonth()];
    const currentyear = props.date.getFullYear();
    const currentday = props.date.getDate();
    return (
        <div className='expense-date'>
            <div className='month'>
                {currentmonth}
            </div>
            <div className='year'>
                {currentyear}
            </div>
            <div className='date'>
                {currentday}
            </div>
        </div>
    )
}

export default Expensedate;