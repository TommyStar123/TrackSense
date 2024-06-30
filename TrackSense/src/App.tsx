import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import AddExpense from './pages/AddExpense'
// import ShowExpense from './pages/ShowExpense'
import Expenses from './pages/Expenses.tsx'
// import EditExpense from './pages/EditExpense'
// import DeleteExpense from './pages/DeleteExpense'


function App() {
  return (
    <Routes>
      <Route path="/expenses" element={<Expenses />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/expenses/add" element={<AddExpense />} />
      <Route path="/expenses/details/:id" element={<ShowExpense />} />
      <Route path="/expenses/edit/:id" element={<EditExpense />} />
      <Route path="/expenses/delete/:id" element={<DeleteExpense />} /> */}
    </Routes>
  )
}

export default App