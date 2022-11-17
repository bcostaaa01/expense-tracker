import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      title: 'House Insurance',
      amount: 176.56,
      date: new Date(2022, 11, 17)
    },
    {
      title: 'Life Insurance',
      amount: 145.26,
      date: new Date(2022, 11, 17)
    },
    {
      title: 'Car Insurance',
      amount: 100.86,
      date: new Date(2022, 11, 17)
    }
  ]

  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  )
}

export default App;
