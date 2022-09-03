import React, { useState } from 'react'
import "./Overview.css"
import TransactionForm from './TransactionForm'

export default function Overview({ income, expense, addTransactions }) {

	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<div className='top-section'>
				<button 
				onClick={() => setIsShow(prevState => !prevState)}  
				className={`btn ${isShow ? "cancel" : ""}`}> 
				{isShow ? "Cancel" : "Add"}
				 </button>		 
			</div>
			{isShow && <TransactionForm addTransactions={addTransactions} /> }

			<hr />
			<div className='result-section'>
				<div className='cost-box'> Expence: 
				<span className='exp'>{expense} $  </span>
				</div>
				<div className='cost-box'> Income: 
				<span className='inc'> {income} $  </span>
				</div>
			</div>


			<p className='balance' >Balance : {income - expense} </p>

		</>
	)
}
