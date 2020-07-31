import React from 'react';
import './App.css'
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {History} from './components/History'
import {TransactionForm} from './components/TransactionForm'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <main className='App'>
    <GlobalProvider>
    <Header />
    <Balance />
    <IncomeExpense />
    <History />
    <TransactionForm />
    </GlobalProvider>
    
    </main>
  );
}

export default App;