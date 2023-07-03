import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  
  var expenses = [
    {id: 1, title: 'Petrol Gas', amount: 2, date: new Date(2023, 7, 10)},
    {id: 2, title: 'Lunch', amount: 10, date: new Date(2023, 2, 13)},
    {id: 3, title: 'Cinema', amount: 5, date: new Date(2023, 5, 15)},
    {id: 4, title: 'Coffee', amount: 5, date: new Date(2022, 1, 16)},
  ];



  return (
    <div>
      <h2>Hello World!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
    </div>
  );
}

export default App;
