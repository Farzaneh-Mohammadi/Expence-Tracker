import React, { useState } from 'react'
import "./TransactionForm.css"

export default function TransactionForm({addTransactions}) {

	const [formValues, setFormValues] = useState({
		type: "expense",
		amount: 0,
		description: ""
	})

	const changeHandler = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		})
	}

	const submitHandler = (e) => {
		e.preventDefault();
		addTransactions(formValues)
	}

	return (
		<form className='transaction-form' onSubmit={submitHandler}>

			<div className='transaction-inps'>
				<input
					type="number"
					name='amount'
					placeholder="Amount"
					onChange={changeHandler}
					value={formValues.amount}
				/>
				<input
					type="text"
					name='description'
					placeholder="Description"
					onChange={changeHandler}
					value={formValues.description}
				/>
			</div>


			<div className='radio-container'>
				<input
					type="radio"
					value="expence"
					name="type"
					onChange={changeHandler}
					checked={formValues.type === "expense"}
				/>
				<label className='radio'>Expense</label>

				<input
					type="radio"
					value="income"
					name="type"
					onChange={changeHandler}
					checked={formValues.type === "income"}
				/>
				<label className='radio'>Income</label>
			</div>


			<button className='form-button ' type='submit'> Add Transaction </button>
		</form>
	)
}
