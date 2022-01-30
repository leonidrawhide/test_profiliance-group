import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.svg';
import logoCropped from '../img/logo-cropped.svg';
import userIcon from '../img/user-icon.png';
import newsIcon from '../img/news-icon.png';
import './styles/style.css';
import ModalLogin from './ModalLogin';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
	const [loginActive, setLoginActive] = useState(false);
	const loginPopup = useSelector((state) => state.loginPopup);
	const dispatch = useDispatch();
	const loginPopupAction = (e) => {
		e.preventDefault()
		const loginPopupData = loginPopup
		dispatch({type: 'CHANGE_POPUP_VALUE', loginPopupData})
	}

	return <div className='nav red lighten-5'>
		<ModalLogin active={loginActive} setActive={setLoginActive} />
		<nav className="nav-wrapper red lighten-5">
			<Link to={'/'} >
				<img className="nav-wrapper__logo" src={logo} alt="logo" />
				<img className="nav-wrapper__logo-alt" src={logoCropped} alt="logo" />
			</Link>
			<ul 
				className="nav-wrapper__links " 
				id="nav-mobile" 
			>
				<li className="nav-wrapper__links_item">
					<Link to={'news'} >
					<img className="nav-wrapper__links_item_icon" src={newsIcon} alt="news link" />
					</Link>
				</li>
				<li className="nav-wrapper__links_item">
					<button onClick={loginPopupAction}>
					<img className="nav-wrapper__links_item_icon" src={userIcon} alt="login link" />
					</button>
				</li>
			</ul>
		</nav>
		<Outlet />
	</div>
		
;
}
