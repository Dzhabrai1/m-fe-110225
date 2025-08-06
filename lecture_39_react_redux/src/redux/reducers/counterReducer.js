// src/redux/reducers/counterReducer.js
import { COUNTER_ACTIONS } from '../actions/counterActions.js'

// Начальное значение счётчика
const initialState = 0

// Редьюсер — функция, которая обновляет state
export const counterReducer = (state = initialState, action) => {              // Рудюсер принимает 2 
	switch (action.type) {
		case COUNTER_ACTIONS.increment:
			return state + 1 // если пришло "увеличить"
		case COUNTER_ACTIONS.decrement:
			return state - 1 // если пришло "уменьшить"
		default:
			return state // если ничего не подходит — оставляем как есть
	}
}
