// src/redux/actions/counterActions.js

// Объявляем список действий для счётчика
export const COUNTER_ACTIONS = {
	increment: 'COUNTER/INCREMENT', // увеличить на 1
	decrement: 'COUNTER/DECREMENT', // уменьшить на 1
}

// Функция, создающая action для увеличения
export const incrementAction = () => {
	return { type: COUNTER_ACTIONS.increment }
}

// Функция, создающая action для уменьшения
export const decrementAction = () => {
	return { type: COUNTER_ACTIONS.decrement }
}
