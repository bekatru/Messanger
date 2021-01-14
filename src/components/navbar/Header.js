import React from "react";

//Import icons
import logo from "../../icons/logo.svg";
import message from "../../icons/message.svg";
import bell from "../../icons/bell.svg";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="logo" />
				<p>LOGO</p>
			</div>

			<div className="nav-items">
				<div className="active">Команда</div>
				<div>Задачи</div>
				<div>Календарь</div>
			</div>

			<div>
				<img src={message} alt="message" />
				<img src={bell} alt="bell" />
			</div>
		</header>
	);
};

export default Header;
