import React from 'react'

export const IncomeExpense = () => {
    return (
        <section class="income-expense-container">
            <div class="income-container">
                <p>Income</p>
                <div class="income-amount-container amount">$200</div>
            </div>
            <div class="expense-container">
                <p>Expense</p>
                <div class="expense-amount-container amount">$100</div>
            </div>
        </section>
    )
}
