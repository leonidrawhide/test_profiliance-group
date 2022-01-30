import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../app/store';

export default function ModalLogin() {
  	const dispatch = useDispatch();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const loginStatus = useSelector((state) => state.loginStatus)
	const loginPopup = useSelector((state) => state.loginPopup);

	const loginAction = (e) => {
		e.preventDefault()
		const data = {
			login: login,
			password: password,
		}
		dispatch({type: 'LOGIN', data})
		if (loginStatus === true) loginPopupAction(e)
	}

	const loginPopupAction = (e) => {
		e.preventDefault()
		const loginPopupData = loginPopup
		dispatch({type: 'CHANGE_POPUP_VALUE', loginPopupData})
	}

	const popupAutoClose = () => {
		console.log("we are thinking " + loginStatus)
		if (loginStatus === false) loginPopupAction()
	}
	

	const logoutAction = (e) => {
		e.preventDefault()
		const data = {
			login: login,
			password: password,
		}
		dispatch({type: 'LOGOUT', data})
		loginPopupAction(e)
	}

	// const checkLoginStatus = () => {
	// 	if (loginStatus) props.setActive(false)
	// }

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
					<div class='modal-login__content_form_error'>Введены неверные данные, попробуйте еще раз</div>
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
