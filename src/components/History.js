import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

export const History = () => {

    const {transactions} = useContext(GlobalContext); 

    return (
        <section className="transaction-history-container">
        <ul className="history"><h2>Transaction History</h2>
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />
            ))}
        </ul>

    </section>
    )

}
