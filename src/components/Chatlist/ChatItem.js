import React from "react";
import Avatar from "../Shared/Avatar";
import arrow from "../../icons/arrow-down.svg";

// Displays Avatar, Name and Children

const ChatItem = ({ data, children }) => {
	const { name, surname } = data;

	return (
		<div>
			<div className="chat">
				<Avatar data={data} size={surname ? "T" : "S"} />
				<p>{`${name} ${surname ? surname : ""}`}</p>
				{children && <img src={arrow} alt="arrow" />}
			</div>
			<div className={`chat_children`}>{children}</div>
		</div>
	);
};

export default ChatItem;
