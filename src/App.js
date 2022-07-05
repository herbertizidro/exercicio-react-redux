import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import {setStoreCustomer} from './store/modules/shop/actions'

function App() {
  
  //obter os dados do estado
  const store = useSelector((state) => state.shop)
  console.log('estado: ', store)
  //let state = store.getState()
  
  const dispatch = useDispatch() //envia a action para o reducer
  
  const [customer, setCustomer] = useState({
	  name: '',
	  email: '',
  })
  
  //colocar dados no estado
  const getAddUser = (e) => {
	e.preventDefault()
	dispatch(setStoreCustomer(customer))
  }
  
  return (
		<>
		<form style={{margin: "40px"}}>
			  <div className="form-group">
				<label htmlFor="name">Nome</label>
				<input type="text" className="form-control" id="name" onChange={(e) => {
					setCustomer({...customer, name: e.target.value})
				}} />
			  </div>
			  <div className="form-group">
				<label htmlFor="email">E-mail</label>
				<input type="email" className="form-control" id="email" onChange={(e) => {
					setCustomer({...customer, email: e.target.value})
				}} />
			  </div>

			  <button type="submit" className="btn btn-primary" onClick={(e) => getAddUser(e)}>Submit</button>
		</form>
		<div style={{margin: "40px"}}>
			<p>Dados no estado:</p>
			<p>Nome: {store.customer.name ? store.customer.name : '---'}
			<br/>
			E-mail: {store.customer.email ? store.customer.email : '---'}</p>
		</div>
		</>
  );
}

export default App;
