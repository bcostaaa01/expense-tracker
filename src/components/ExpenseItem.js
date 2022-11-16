import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2022, 11, 16);
    const expenseTitle = "House Insurance";
    const expenseAmount = 185.48;

    return (
        <div className='expense-item'>
            <div className='expense-item__description'>{expenseDate.toISOString()}</div>
            <div className='expense-item__price'>
                <h2>{expenseTitle}</h2>
                <div>{expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;