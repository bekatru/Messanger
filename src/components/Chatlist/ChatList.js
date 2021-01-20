import React from "react";

// Components
import ChatItem from "./ChatItem";
import SearchResults from "./SearchResults";
import GroupChats from "./Groupchats";

//Utils
import { findUser } from "../../utils";

const ChatList = ({ data: { groups, chats, users }, query }) => (
	<div className="chatlist">
		{!query.length ? (
			<>
				<ChatItem data={groups[0]} />
				<p>ОТДЕЛЫ</p>
				<GroupChats data={{ groups, users }} />
				<p>ПОСЛЕДНИЕ ЧАТЫ</p>
				{chats.map((chat, index) => (
					<ChatItem data={findUser(users, chat.mate)} key={index} />
				))}
			</>
		) : (
			<SearchResults data={{ groups, users }} query={query} />
		)}
	</div>
);

export default ChatList;
