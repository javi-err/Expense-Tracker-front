import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext); 
    
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => ( acc+= item), 0).toFixed(2);
    
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1 ).toFixed(2);
    
    return (
        <section className="income-expense-container">
            <div className="income-container">
                <p>Income</p>
                <div className="income-amount-container amount">$ {income}</div>
            </div>
            <div className="expense-container">
                <p>Expense</p>
                <div className="expense-amount-container amount">$ {expense}</div>
            </div>
        </section>
    )
}
