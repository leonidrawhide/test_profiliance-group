import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalLogin() {
  	const dispatch = useDispatch();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const loginStatus = useSelector((state) => state.loginStatus)
	const loginPopup = useSelector((state) => state.loginPopup);
	const loginAttempts = useSelector((state) => state.loginAttempts); 
	let errorClass = 'modal-login__content_form_error invisible'

	const loginAction = (e) => {
		e.preventDefault()
		const data = {
			login: login,
			password: password,
		}
		dispatch({type: 'LOGIN', data})
		errorClass = 'modal-login__content_form_error'
	}

	const loginPopupAction = (e) => {
		e.preventDefault()
		const loginPopupData = loginPopup
		dispatch({type: 'CHANGE_POPUP_VALUE', loginPopupData})
	}

	const logoutAction = (e) => {
		e.preventDefault()
		const data = {
			login: login,
			password: password,
		}
		errorClass = 'modal-login__content_form_error invisible'
		dispatch({type: 'LOGOUT', data})
		loginPopupAction(e)
	}
	console.log(loginAttempts)
	if (!loginStatus) {
		return <div 
			className={loginPopup ? 'modal-login active' : 'modal-login'} 
			onClick={loginPopupAction}
			>
			<div 
				className='modal-login__content' 
				onClick={e => e.stopPropagation()}
			>
				<form className='modal-login__content_form'>
					<input 
						type="text" 
						value={login} 
						name="login" 
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
					<div class={loginAttempts > 0 ? 'modal-login__content_form_error' : 'modal-login__content_form_error invisible'}>Введены неверные данные, попробуйте еще раз</div>
					<button 
						className='waves-effect waves-light btn red lighten-5' 
						onClick={loginAction} 
					>Войти</button>
				</form>
			</div>
		</div>;
	} else {
		return <div 
			className={loginPopup ? 'modal-login active' : 'modal-login'} 
			onClick={loginPopupAction}
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
