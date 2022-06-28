import React, { useEffect, useState } from 'react'
import "./ExpenseApp.css"
import Overview from './Overview'
import Transactions from './Transactions'

export default function ExpenseApp() {

	const [expense, setExpense] = useState(0)
	const [income, setIncome] = useState(0)
	const [transactions, setTransactions] = useState([])

	const addTransactions = (formValues) => {
console.log(formValues);
const data = {...formValues, id: Date.now()}
setTransactions([...transactions, data])
	}

	useEffect(() => {
		let exp = 0;
		let inc = 0;
		transactions.forEach((t) => {
			t.type === "expense" ? (exp = exp + parseFloat(t.amount) ) :  (inc = inc + parseFloat(t.amount) ) 
		})

		setExpense(exp)
		setIncome(inc)
	}, [transactions])

	return (
		<section className='container'>
			<Overview income={income} expense={expense} addTransactions={addTransactions} />
			<Transactions transactions={transactions}  />
		</section>
	)
}
