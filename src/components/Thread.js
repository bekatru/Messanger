import React from "react";
import Message from "./Message";

const Thread = ({ chat, users, user }) => {
	const thread = chat.messages.map((message) => {
		return (
			<Message key={message.id} message={message} users={users} user={user} />
		);
	});
	return <div className="thread">{thread}</div>;
};

export default Thread;
