import {useContext} from "react"
import { GlobalContext } from "./context/GlobalState";
import Transaction from "./Transaction";



function TransactionList(){
    const {state} = useContext(GlobalContext);

    return (
        <div className="w-50">
            <h4>History</h4>
            <hr></hr>
            {
                state.map((val) => {
                    return (
                      <Transaction key={val.id} trans={val}></Transaction>
                    );
                })
            }
           
        </div>
    );
}

export default TransactionList;