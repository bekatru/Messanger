import React from "react";
import Avatar from "./Avatar";

import arrow from "../icons/arrow-down.svg";

const ChatList = ({ data: { groups, chats, users }, query }) => {
	const findUser = (id) => {
		return users.find((user) => user.id === id);
	};

	// Renders Groups
	const groupChats = groups.map((group) => {
		const sub = group.participants.map((id) => {
			const { name, surname } = findUser(id);
			return (
				<div className="chat sub" key={id}>
					<Avatar data={{ name, surname }} size="S" />
					<p>{name + " " + surname}</p>
				</div>
			);
		});
		return (
			<div key={group.name}>
				<div className="chat">
					<Avatar data={group} size="S" />
					<p>{group.name}</p>
					{sub.length ? (
						<img src={arrow} alt="arrow" className="dropdown" />
					) : null}
				</div>
				{sub}
			</div>
		);
	});

	// Renders Recent
	const recentChats = chats.map((chat) => {
		const { name, surname } = findUser(chat.mate);
		return (
			<div className="chat" key={name + surname}>
				<Avatar data={{ name, surname }} size="S" />
				<p>{name + " " + surname}</p>
			</div>
		);
	});
	return (
		<div className="chatlist">
			<p>ОТДЕЛЫ</p>
			{groupChats.filter(
				(chat) => chat.key.toUpperCase().search(query.toUpperCase()) > -1
			)}
			<p>ПОСЛЕДНИЕ ЧАТЫ</p>
			{recentChats.filter(
				(chat) => chat.key.toUpperCase().search(query.toUpperCase()) > -1
			)}
		</div>
	);
};

export default ChatList;
