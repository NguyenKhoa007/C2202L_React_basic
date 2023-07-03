import './ExpenseItem.css';

function ExpenseItem(props) {


    /// JSX
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h3>{props.title}</h3>
                <div className='expense-item__price'>$ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;