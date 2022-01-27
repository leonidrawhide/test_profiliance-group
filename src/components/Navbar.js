import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.svg';
import userIcon from '../img/user-icon.png';
import newsIcon from '../img/news-icon.png';
import './styles/style.css';

export default function Navbar() {
	return <div>
		<nav className="nav-wrapper red lighten-5">
			<Link to={'/'} >
				<img className="nav-wrapper__logo" src={logo} alt="logo" />
			</Link>
			<ul 
				className="nav-wrapper__links right hide-on-med-and-down" 
				id="nav-mobile" 
			>
				<li className="nav-wrapper__links_item">
					<Link to={'news'} >
					<img className="nav-wrapper__links_item_icon" src={newsIcon} alt="news link" />
					</Link>
				</li>
				<li className="nav-wrapper__links_item">
					<Link to={'/'} >
					<img className="nav-wrapper__links_item_icon" src={userIcon} alt="login link" />
					</Link>
				</li>
			</ul>
		</nav>
		<Outlet />
	</div>
		
;
}
