import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext); 

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    
    return (
    <section className="balance-left">
        <div className="balance-amount">
            <p>Your Balance</p>
    <div className="balance-amount-container amount">$ {total}</div>
        </div>
    </section>
    )
}


