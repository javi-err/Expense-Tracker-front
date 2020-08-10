import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';


    return (
        
            <div style = {{boxShadow: sign === '+' ? "-1px 0px 12px 2px green" : "-1px 0px 12px 2px red"}}>
            <li className="negative"><div className="t-text">{transaction.text}</div>
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick = {() => deleteTransaction(transaction.id)} className ="delete-btn">x</button></li> 
            </div>
        )

}


