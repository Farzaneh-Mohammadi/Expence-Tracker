import React from 'react'
import "./Transactions.css"

export default function Transactions({ transactions }) {
	return (
		<section>
			{transactions.length && transactions.map((t) => (
				<div 
				key={t.id} 
				className="transactions"
				style={{ borderRight: t.type === "expense" && "4px solid red" }}
				>
					<span> {t.description} </span>
					<span> {t.amount} $  </span>
				</div>
			)
			)}
		</section>

	)
}
