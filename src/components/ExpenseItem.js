import './ExpenseItem.css'

function ExpenseItem(props) {



    return (
        <div className='expense-item'>
            <div className='expense-item__description'>{props.date.toISOString()}</div>
            <div className='expense-item__price'>
                <h2>{props.title}</h2>
                <div>{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;