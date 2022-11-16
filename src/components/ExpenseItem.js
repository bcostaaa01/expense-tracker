import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div className='expense-item__description'>16/11/2022</div>
            <div className='expense-item__price'>
                <h2>House Insurance</h2>
                <div>$200</div>
            </div>
        </div>
    )
}

export default ExpenseItem;