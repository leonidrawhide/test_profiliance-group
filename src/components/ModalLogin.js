import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/reducers';

export default function ModalLogin(props) {
  	const dispatch = useDispatch();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const loginStatus = useSelector((state) => state.loginStatus)
	

	const loginAction = (e) => {
		e.preventDefault()
		console.log('trying to log in')
		const data = {
			login: login,
			password: password,
		}
		dispatch({type: 'LOGIN', data})
		props.setActive(false)
	}
	const logoutAction = (e) => {
		e.preventDefault()
		console.log('trying to log in')
		const data = {
			login: login,
			password: password,
		}
		dispatch({type: 'LOGOUT', data})
		props.setActive(false)

	}
	if (!loginStatus) {
		return <div 
			className={props.active ? 'modal-login active' : 'modal-login'} 
			onClick={() => props.setActive(false)}
			>
			<div 
				className='modal-login__content' 
				onClick={e => e.stopPropagation()}
			>
				<form className='modal-login__content_form'>
					<input 
						type="text" 
						value={login} 
						name="logiin" 
						placeholder='Логин / почта' 
						onChange={e=>setLogin(e.target.value)}
					/>
					<input 
						type="password" 
						value={password} 
						name="password" 
						placeholder='Пароль' 
						onChange={e=>setPassword(e.target.value)}
						/>
					<button className='waves-effect waves-light btn red lighten-5' onClick={loginAction}>Войти</button>
				</form>
			</div>
		</div>;
	} else {
		return <div 
			className={props.active ? 'modal-login active' : 'modal-login'} 
			onClick={() => props.setActive(false)}
		>
			<div 
				className='modal-login__content' 
				onClick={e => e.stopPropagation()}
			>
				<form className='modal-login__content_form'>
					<button className='waves-effect waves-light btn red lighten-5' onClick={logoutAction}>Выйти</button>
				</form>
			</div>
		</div>;
	}
  	
}
