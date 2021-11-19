import Balance from "./components/Balance";
import Header from "./components/Header";
import ExpenseIncome from "./components/ExpenseIncome";
import TransactionList from "./components/TransactionList";
import AddExpense from "./components/AddExpense";
import {GlobalProvider} from "./components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container bg-light">
        <Header></Header>
        <div className="main">
          <Balance></Balance>
          <ExpenseIncome></ExpenseIncome>
          <TransactionList></TransactionList>
          <AddExpense></AddExpense>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
