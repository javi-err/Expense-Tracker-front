import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext); 
    
    const amounts = transactions.map(transaction => transaction.amount)
    
    return (
        <section className="income-expense-container">
            <div className="income-container">
                <p>Income</p>
                <div className="income-amount-container amount">$200</div>
            </div>
            <div className="expense-container">
                <p>Expense</p>
                <div className="expense-amount-container amount">$100</div>
            </div>
        </section>
    )
}
