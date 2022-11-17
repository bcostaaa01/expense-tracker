import Expenses from "./components/Expenses/Expenses";

function App() {

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

  return (
    <div className="App">
      <h1>Items</h1>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
