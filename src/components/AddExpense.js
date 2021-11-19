import { useState } from "react";
import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";



function AddExpences(){

    const [text,setText] = useState("");
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        addTransaction({text,amount:+amount});
        setText("");
        setAmount(0);
    }


    
    return (
        <div className="w-50 pb-4">
            <h4>Add New Transaction</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <label className="fw-bold">Text</label><br/>
                <input className="mt-2 w-50" type="text" placeholder="Enter text.." value={text} onChange={(e) => {setText(e.target.value)}}/><br/>
                <label className="mt-3 fw-bold">Amount<br/>(negative-expences,positive-income)</label><br/>    
                <input className="mt-2 w-50" type="number" placeholder="Enter amount..." value={amount} onChange={(e) => {setAmount(e.target.value)}}/><br/>  
                <button className="mt-3 w-50 border-0 rounded fw-bold bg-primary text-white pt-2 pb-2">Add Transaction</button>         
            </form>
        </div>
    );
}

export default AddExpences;