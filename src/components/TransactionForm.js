import React, {useState} from 'react'

export const TransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0); 

    return (
        <section className="transaction-form-container">
        <h2>Transaction Form</h2>
        <form className="transaction-form">
            <div className="text-form">
                <label htmlFor="transaction-text">Add your transaction</label>
                <input type="text" className="transaction-text" value = {text} onChange={(e) => setText(e.target.value)}></input>
            </div>

            <div className="transaction-amount-htmlForm">
                <label htmlFor="transaction-amount">Add the amount</label>
                <input type="number" className="transaction-amount"  value = {amount} onChange={(e) => setAmount(e.target.value)}></input> <br />
                <button type="submit" id="btn" className="btn">Submit</button>

            </div>
        </form>
    </section>
    )
}
