// src/components/Counter.jsx
import { useSelector, useDispatch } from 'react-redux'
import {
	incrementAction,
	decrementAction,
} from '../redux/actions/counterActions.js'

export default function Counter() {
	// Берём значение counter из store
	const counter = useSelector(state => state.counter)

	// Получаем функцию dispatch
	const dispatch = useDispatch()

	return (
		<div>
			<p>Now counter is: {counter}</p>
			<button onClick={() => dispatch(incrementAction())}>Increment</button>
			<button onClick={() => dispatch(decrementAction())}>Decrement</button>
		</div>
	)
}
