import React, { useEffect, useRef } from "react";
import Message from "./Message/Message";

const Thread = ({ chat, users, user }) => {
	const scroll = useRef(null);

	// Scroll Down and Animate Sending
	useEffect(() => {
		scroll.current.addEventListener("DOMNodeInserted", (event) => {
			const { currentTarget: target } = event;
			target.scroll({ top: target.scrollHeight, behavior: "smooth" });
		});
	}, []);

	return (
		<div ref={scroll} className="thread">
			{chat.messages.map((message) =>
				message.timecheck ? (
					<div key="timecheck" className="timecheck">
						4 ноября
					</div>
				) : (
					<Message
						key={message.id}
						message={message}
						users={users}
						user={user}
					/>
				)
			)}
		</div>
	);
};

export default Thread;
