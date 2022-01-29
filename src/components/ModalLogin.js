import React from 'react';

export default function ModalLogin(props) {
	console.log(props.active);
  	return <div 
  		className={props.active ? 'modal-login active' : 'modal-login'} 
		onClick={() => props.setActive(false)}
	>
		<div 
			className='modal-login__content' 
			onClick={e => e.stopPropagation()}
		>
			<form className='modal-login__content_form'>
				<input type="text" name="login" placeholder='Логин / почта' />
				<input type="password" name="password" placeholder='Пароль' />
				<button className='waves-effect waves-light btn red lighten-5'>Войти</button>
			</form>
	  </div>
  </div>;
}
