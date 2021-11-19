import {GlobalContext} from "./context/GlobalState";
import {useContext} from "react";

function Transaction({trans}) {
  const {deleteTransaction} = useContext(GlobalContext);

  const handleDelete = () => {
    deleteTransaction(trans.id);
    console.log(trans.id);
  };

  const sign = trans.amount > 0 ? "+" : "-";
  return (
    <div
      className={
        trans.amount > 0
          ? "w-75 shadow p-3 mb-5 bg-body rounded mt-4 border-end border-5 border-success"
          : "w-75 shadow p-3 mb-5 bg-body rounded mt-4 border-end border-5 border-danger"
      }
      onDoubleClick={handleDelete}
    >
      <span>{trans.text}</span>
      <span className="float-end">
        {sign}${Math.abs(trans.amount)}
      </span>
      <br></br>
      <span className="opacity-25 text-danger">double Click to Delete</span>
    </div>
  );
}

export default Transaction;
