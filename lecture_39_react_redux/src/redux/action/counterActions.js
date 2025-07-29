export const COUNTER_ACTIONS = {
	increment: 'COUNTER/INCREMENT',
	decrement: 'COUNTER/DECREMENT',
}

export const incrementAction = () => ({ type: COUNTER_ACTIONS.increment })
export const decrementAction = () => ({ type: COUNTER_ACTIONS.decrement })
