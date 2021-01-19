import React, { useEffect, useRef } from "react";
import Message from "./Message";

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
			{chat.messages.map((message) => {
				if (message.timecheck) {
					return (
						<div key="timecheck" className="timecheck">
							Сегодня, 4 ноября
						</div>
					);
				} else {
					return (
						<Message
							key={message.id}
							message={message}
							users={users}
							user={user}
						/>
					);
				}
			})}
		</div>
	);
};

export default Thread;
