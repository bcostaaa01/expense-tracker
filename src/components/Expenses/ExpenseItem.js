import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import { click } from '@testing-library/user-event/dist/click';

const ExpenseItem = (props) => {

    const clickHandler = () => {
        alert('Clicked!')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;