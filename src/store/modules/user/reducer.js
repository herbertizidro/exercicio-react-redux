
import types from './types'

//estado e ação do módulo "user"

const INITIAL_STATE = {
	user: {},
	admin: false,
}

function user(state = INITIAL_STATE, action) {
	switch(action.type){
		case types.SET_USER: {
			return {...state, user: action.user}
		}
		default:
			return state;
	}
}

export default user;
