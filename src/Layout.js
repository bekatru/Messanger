import React from "react";

const Layout = () => {
	return (
		<header>
			<div className="logo">
				<div className="logo_icon"></div>
				<a className="logo_name" href="#">
					LOGO
				</a>
			</div>
			<nav>
				<a href="#">Команда</a>
				<a href="#">Задачи</a>
				<a href="#">Календарь</a>
			</nav>
			<a href="#">
				<div className="message_icon"></div>
				<div className="notification_circle">
					<p>4</p>
				</div>
			</a>
			<a href="#">
				<div className="notification_icon"></div>
				<div className="notification_circle bell">
					<p>32</p>
				</div>
			</a>
		</header>
	);
};

export default Layout;
