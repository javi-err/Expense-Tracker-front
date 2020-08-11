import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const TransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0); 
    const {addTransaction} = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: parseInt(amount)
        }

        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }

    return (
        <section className="transaction-form-container">
        <h2>Transaction Form</h2>
        <form className="transaction-form" onSubmit ={handleSubmit}>
            <div className="text-form">
                <label htmlFor="transaction-text">Add your transaction</label>
                <input type="text" className="transaction-text" maxlength='12' required value = {text} onChange={(e) => setText(e.target.value)}></input>
            </div>

            <div className="transaction-amount-htmlForm">
                <label htmlFor="transaction-amount">Add the amount</label>
                <input type="number" className="transaction-amount" required value = {amount} onChange={(e) => setAmount(e.target.value)}></input> <br />
                <button type="submit" id="btn" className="btn">Submit</button>

            </div>
        </form>
    </section>
    )
}
