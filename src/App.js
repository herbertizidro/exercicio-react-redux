import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import {setStoreCustomer} from './store/modules/shop/actions'
import {setStoreUser} from './store/modules/user/actions'

function App() {
   
  const dispatch = useDispatch() //envia a action para o reducer
  
  //componente 01 - shop
  const [customer, setCustomer] = useState({
	  name: '',
	  email: '',
  })
  
  const getAddCustomer = (e) => {
	e.preventDefault()
	dispatch(setStoreCustomer(customer)) //colocar dados no estado
  }
  
  
  //componente 02 - user
  const [user, setUser] = useState({
	  user: ''
  })
  
  const getAddUser = (e) => {
	e.preventDefault()
	dispatch(setStoreUser(user)) //colocar dados no estado
  }
  
  
  
  //obter os dados dos estados(reducers shop e user)
  const store = useSelector((state) => state) // ou state.shop/state.user caso queira um deles
  console.log('estados: ', store)
  
  
  return (
		<>
		
		<form style={{margin: "40px"}}>
			  <p>Componente 01 - <b>shop</b></p>
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

			  <button type="submit" className="btn btn-primary" onClick={(e) => getAddCustomer(e)}>Submit</button>
		</form>
		
		<form style={{margin: "40px"}}>
			  <p>Componente 02 - <b>user</b></p>
			  <div className="form-group">
				<label htmlFor="user">Alias</label>
				<input type="text" className="form-control" id="user" onChange={(e) => {
					setUser({user: e.target.value})
				}} />
			  </div>
			  <button type="submit" className="btn btn-primary" onClick={(e) => getAddUser(e)}>Submit</button>
		</form>
				
		<br/>
		<div style={{margin: "40px"}}>
			<p>Dados no estado <b>shop</b>:</p>
			<p>Nome: {store.shop.customer.name ? store.shop.customer.name : '---'}
			<br/>
			E-mail: {store.shop.customer.email ? store.shop.customer.email : '---'}</p>
			<br/>
			<p>Dados no estado <b>user</b>:</p>
			<p>Alias: {store.user.user.user ? store.user.user.user : '---'}</p>
		</div>
		</>
  );
}

export default App;
