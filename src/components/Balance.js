import {GlobalContext} from "./context/GlobalState";
import {useContext} from "react";

function Balance() {
  const {state} = useContext(GlobalContext);

  let amount = state.map((val) => val.amount);
  let total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="mt-3">
      <span>Your Balance</span>
      <br />
      <span className="fs-2">
        <b>
          <span>$</span>
          {total}
        </b>
      </span>
    </div>
  );
}

export default Balance;
