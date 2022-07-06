
import types from './types'

//registro de ações do modulo user

export function setStoreUser(user) {
	return { type: types.SET_USER, user }
}
