import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses =>
      [expense, ...prevExpenses])
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
