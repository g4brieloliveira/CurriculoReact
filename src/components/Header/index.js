import React from 'react';

import './main.css';

function Header() {
	return (
		<header>
			<div className="initial-text">
				<a href="/"><h2>Gabriel Oliveira</h2></a>
				<p>Front-End Developer</p>
			</div>

			<div className="contacts-icons">
				<a href=""><img src="https://www.flaticon.com/svg/static/icons/svg/81/81323.svg" alt="Github"/></a>
				<a href=""><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111532.svg" alt="LinkedIn"/></a>
				<a href=""><img src="https://www.flaticon.com/svg/static/icons/svg/733/733635.svg" alt="Twitter"/></a>
				<a href=""><img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384031.svg" alt="Instagram"/></a>
			</div>
		</header>
	)
}

export default Header;

