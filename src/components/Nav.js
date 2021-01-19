import React from "react";
import Avatar from "./Avatar";

// icons
import logo from "../icons/logo.svg";
import messge from "../icons/message.svg";
import bell from "../icons/notification.svg";
import arrow from "../icons/arrow-down-white.svg";

const Nav = ({ user }) => {
	const { name, surname, company, notifications } = user;
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="logo" />
				<p className="logo_text">LOGO</p>
			</div>
			{/* Navigation */}
			<nav>
				<a className="active" href="/">
					Команда
				</a>
				<a href="/">Задачи</a>
				<a href="/">Календарь</a>
			</nav>
			{/* Notifications */}
			<div className="notifications">
				<div>
					<img src={messge} alt="messages" />
					<p>{notifications.messages}</p>
				</div>
				<div>
					<img src={bell} alt="bell" />
					<p>{notifications.bell}</p>
				</div>
			</div>
			{/* User Info */}
			<Avatar data={user} size={"L"} />
			<div className="userinfo">
				<p className="username">{`${name} ${surname[0]}.`}</p>
				<p className="company">{company}</p>
			</div>
			<img src={arrow} alt="arrow" />
		</header>
	);
};

export default Nav;
