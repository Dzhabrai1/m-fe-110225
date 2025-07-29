import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from './redux/action/counterActions'

function App() {
	const count = useSelector(state => state)
	const dispatch = useDispatch()

	return (
		<div style={{ textAlign: 'center', marginTop: '40px' }}>
			<h1>Счётчик: {count}</h1>
			<button onClick={() => dispatch(incrementAction())}>+ Добавить</button>
			<button onClick={() => dispatch(decrementAction())}>- Убрать</button>
		</div>
	)
}

export default App
