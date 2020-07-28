import React from 'react';
import './App.css'
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {History} from './components/History'
import {TransactionForm} from './components/TransactionForm'

function App() {
  return (
    <main className='App'>
    <Header />
    <Balance />
    <IncomeExpense />
    <History />
    <TransactionForm />
    </main>
  );
}

export default App;