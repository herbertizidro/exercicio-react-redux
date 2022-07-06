
import { combineReducers } from 'redux'
import shop from './shop/reducer'
import user from './user/reducer'

//junta os estados em um só(a aplicação pode ter vários reducers)

export default combineReducers({
	shop,
	user
});
