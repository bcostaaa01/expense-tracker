import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const expenses = [
    {
      title: 'House Insurance',
      amount: 176.56,
      date: new Date(2022, 10, 10)
    },
    {
      title: 'Life Insurance',
      amount: 145.26,
      date: new Date(2022, 11, 17)
    },
    {
      title: 'Car Insurance',
      amount: 100.86,
      date: new Date(2022, 5, 14)
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
