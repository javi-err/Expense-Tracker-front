import React from 'react'

export const TransactionForm = () => {
    return (
        <section class="transaction-form-container">
        <h2>Transaction Form</h2>
        <form class="transaction-form">
            <div class="text-form">
                <label for="transaction-text">Add your transaction</label>
                <input type="text" class="transaction-text"></input>
            </div>

            <div class="transaction-amount-form">
                <label for="transaction-amount">Add the amount</label>
                <input type="number" class="transaction-amount"></input> <br />
                <button type="submit" id="btn" class="btn">Submit</button>

            </div>
        </form>
    </section>
    )
}
