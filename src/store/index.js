
import { createStore } from 'redux'
import rootReducer from './modules/rootReducer'

//criação da store()

const store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) //verifica se tem a extensão redux dev tools no browser e inicializa


export default store;