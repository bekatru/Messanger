import React from "react";
import Avatar from "./Shared/Avatar";

// icons
import logo from "../icons/logo.svg";
import messge from "../icons/message.svg";
import bells from "../icons/notification.svg";
import arrow from "../icons/arrow-down-white.svg";

const Nav = ({ user }) => {
	const {
		name,
		surname,
		company,
		notifications: { messages, bell },
	} = user;
	return (
		<header>
			{/* LOGO */}
			<div className="logo">
				<img src={logo} alt="logo" />
				LOGO
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
					<img src={messge} alt="msgs" />
					<p>{messages}</p>
				</div>
				<div>
					<img src={bells} alt="bell" />
					<p>{bell}</p>
				</div>
			</div>
			{/* User Info */}
			<Avatar data={user} size={"L"} />
			<div className="userinfo">
				<p className="username">{`${name} ${surname[0]}.`}</p>
				<p className="company">{company}</p>
			</div>
			<img width="20" src={arrow} alt="arrow" />
		</header>
	);
};

export default Nav;
