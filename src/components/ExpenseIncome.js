import {GlobalContext} from "./context/GlobalState";
import {useContext} from "react";

function ExpenseIncome() {
  const {state} = useContext(GlobalContext);

  let amount = state.map((val) => val.amount);

  let income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  let expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="bg-danger w-50 shadow p-3 mb-5 bg-body rounded mt-4">
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center me-4">
          <h4>Income</h4>
          <h4 className="text-success">${income}</h4>
        </div>
        <div className="text-center">
          <h4>Expences</h4>
          <h4 className="text-danger">${Math.abs(expense).toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
}

export default ExpenseIncome;
