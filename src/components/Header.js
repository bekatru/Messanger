import React from "react";
import Avatar from "./Shared/Avatar";

// icons
import settings from "../icons/settings.svg";
import search from "../icons/search-black.svg";

const Header = ({ data }) => {
	return (
		<div className="header">
			<Avatar data={data} size="L" />
			<div className="userinfo">
				<p className="username" style={{ color: "black" }}>
					{data.name}
				</p>
				<p
					className="company"
					style={{ color: "black", opacity: 0.4 }}
				>{`${data.participants.length} участников`}</p>
			</div>
			<div className="tools">
				<img src={search} alt="search" />
				<img src={settings} alt="settings" />
			</div>
		</div>
	);
};

export default Header;
