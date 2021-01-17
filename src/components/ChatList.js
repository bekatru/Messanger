import React from "react";
import Avatar from "./Avatar";

const ChatList = ({ data: { groups, chats, users }, query }) => {
	const findUser = (id) => {
		return users.find((user) => user.id === id);
	};

	// Renders Groups
	const groupChats = groups.map((group) => {
		return (
			<div key={group.name}>
				<div className="chat">
					<Avatar data={group} size="S" />
					<p>{group.name}</p>
				</div>
				{group.participants.map((id) => {
					const { name, surname } = findUser(id);
					return (
						<div className="chat sub" key={id}>
							<Avatar data={{ name, surname }} size="S" />
							<p>{name + " " + surname}</p>
						</div>
					);
				})}
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
