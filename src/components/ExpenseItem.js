import './ExpenseItem.css';

function ExpenseItem(props) {

    // console.log(props.expenses);
    // var expenseList2 =[];
    // props.expenses.forEach(expense => expenseList2.push(
    //     <div className='expense-item' key={expense.id}>
    //         <div>{expense.date.toISOString()}</div>
    //         <div className='expense-item__description'>
    //             <h3>{expense.title}</h3>
    //             <div className='expense-item__price'>$ {expense.amount}</div>
    //         </div>
    //     </div>)
    // );

    // var expenseList = props.expenses.map(expense => 
    //     <div className='expense-item' key={expense.id}>
    //         <div>{expense.date.toISOString()}</div>
    //         <div className='expense-item__description'>
    //             <h3>{expense.title}</h3>
    //             <div className='expense-item__price'>$ {expense.amount}</div>
    //         </div>
    //     </div>
    // );

    /// JSX
    return (
        <div>
            {props.expenses.map(expense => (
                <div className='expense-item' key={expense.id}>
                    <div>{expense.date.toISOString()}</div>
                    <div className='expense-item__description'>
                        <h3>{expense.title}</h3>
                        <div className='expense-item__price'>$ {expense.amount}</div>
                    </div>
                </div>
            ))}
        </div>
        
        // <div className='expense-item'>
        //     <div>{props.date.toISOString()}</div>
        //     <div className='expense-item__description'>
        //         <h3>{props.title}</h3>
        //         <div className='expense-item__price'>$ {props.amount}</div>
        //     </div>
        // </div>
    );
}

export default ExpenseItem;