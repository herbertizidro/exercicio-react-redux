
import types from './types'

//estado e ação do módulo "shop"

const INITIAL_STATE = {
	customer: {},
	admin: false,
}

function shop(state = INITIAL_STATE, action) {
	switch(action.type){
		case types.SET_CUSTOMER: {
			return {...state, customer: action.customer}
		}
		default:
			return state;
	}
}

export default shop;
