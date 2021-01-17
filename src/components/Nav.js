import React from "react";
import Avatar from "./Avatar";

// icons
import logo from "../icons/logo.svg";
import mssg from "../icons/message.svg";
import bell from "../icons/notification.svg";

const Nav = ({ user }) => {
	const { name, surname, company, notifications } = user;
	const username = `${name} ${surname[0]}.`;
	const avatar = <Avatar data={user} size={"L"} />;
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="logo" />
				<p className="logo_text">LOGO</p>
			</div>

			<nav>
				<a className="active" href="/">
					Команда
				</a>
				<a href="/">Задачи</a>
				<a href="/">Календарь</a>
			</nav>

			<div className="notifications">
				<div>
					<img src={mssg} alt="messages" />
					<p>{notifications.messages}</p>
				</div>
				<div>
					<img src={bell} alt="bell" />
					<p>{notifications.bell}</p>
				</div>
			</div>

			{avatar}
			<div className="userinfo">
				<p className="username">{username}</p>
				<p className="company">{company}</p>
			</div>
		</header>
	);
};

export default Nav;
