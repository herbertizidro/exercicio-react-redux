
import types from './types'

//registro de ações do modulo shop

export function setStoreCustomer(customer) {
	return { type: types.SET_CUSTOMER, customer }
}
