import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.svg';
import logoCropped from '../img/logo-cropped.svg';
import userIcon from '../img/user-icon.png';
import newsIcon from '../img/news-icon.png';
import './styles/style.css';
import ModalLogin from './ModalLogin';

export default function Navbar() {
	const [loginActive, setLoginActive] = useState(false);
	const webLogo = window.screen.width > 426 ? logo : logoCropped;
	console.log(window.screen.width)
	return <div className='nav red lighten-5'>
		<ModalLogin active={loginActive} setActive={setLoginActive} />
		<nav className="nav-wrapper red lighten-5">
			<Link to={'/'} >
				<img className="nav-wrapper__logo" src={webLogo} alt="logo" />
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
					<button  onClick={() => setLoginActive(true)}>
					<img className="nav-wrapper__links_item_icon" src={userIcon} alt="login link" />
					</button>
				</li>
			</ul>
		</nav>
		<Outlet />
	</div>
		
;
}
