import React from "react";
import Avatar from "./Avatar";

//icons
import thumbsup from "../icons/thumbsup.svg";

const Message = ({ users, message, user }) => {
	const findUser = (id) => {
		return users.find((user) => user.id === id);
	};
	const sender = findUser(message.sender);

	const info = () => {
		const likes = message.likes ? (
			<div className="info_likes">
				<img width="16" src={thumbsup} alt="+" />
				{message.likes}
			</div>
		) : null;
		return (
			<div className="info">
				{likes}
				<p className="info_time">14:23</p>
			</div>
		);
	};

	const quote = (data) => {
		if (!data) return null;
		const { name, surname } = findUser(data.sender);
		return (
			<div className="quote">
				<div className="quote_header">
					<p className="quote_header_name">{name + " " + surname}</p>
					<p className="quote_header_date">12.12.12 12:12</p>
				</div>
				<p className="quote_body">{data.body}</p>
			</div>
		);
	};
	return (
		<div className={`message`}>
			{message.sender !== user && <Avatar data={sender} size="L" />}
			<div className={`message_body ${message.sender === user ? "left" : ""}`}>
				{quote(message.quote)}
				<p>{message.body}</p>
				{info()}
			</div>
		</div>
	);
};

export default Message;
