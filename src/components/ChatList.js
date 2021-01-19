import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";

const ChatList = ({ data: { groups, chats, users }, query }) => {
	const [searchResults, setSearchResults] = useState([]);
	useEffect(() => {
		const a = groups.filter(
			(group) => group.name.toUpperCase().search(query.toUpperCase()) > -1
		);
		const b = users.filter(
			(user) =>
				user.name.toUpperCase().search(query.toUpperCase()) > -1 ||
				user.surname.toUpperCase().search(query.toUpperCase()) > -1
		);
		const results = a.concat(b);
		setSearchResults(results);
	}, [query, groups, users]);
	const findUser = (id) => {
		return users.find((user) => user.id === id);
	};

	// Render Groups Chats
	const groupChats = groups.map((group, index) => {
		// Escape Common Chat Room
		if (!index) return null;
		// Render Group Chat Participants
		const sub = group.participants.length
			? group.participants.map((item, index) => (
					<ChatItem data={findUser(item)} key={index} />
			  ))
			: null;

		return <ChatItem data={group} children={sub} key={index} />;
	});

	// Render Recent Chats
	const recentChats = chats.map((chat, index) => (
		<ChatItem data={findUser(chat.mate)} key={index} />
	));

	if (!query.length) {
		return (
			<div className="chatlist">
				{query.length ? (
					searchResults.map((item, index) => (
						<ChatItem key={index} data={item} />
					))
				) : (
					<>
						<ChatItem data={groups[0]} />
						<p>ОТДЕЛЫ</p>
						{groupChats}
						<p>ПОСЛЕДНИЕ ЧАТЫ</p>
						{recentChats}
					</>
				)}
			</div>
		);
	} else {
		return searchResults.map((item, index) => <ChatItem data={item} />);
	}
};

export default ChatList;
