import React from "react";

//Components
import ChatItem from "./ChatItem";
// Utils
import { findUser } from "../../utils";

const GroupChats = ({ data: { groups, users } }) => {
	return groups.map((group, index) => {
		// Escape Common Chat Room
		if (!index) return null;

		// Render Group Chat Participants
		const sub = group.participants.length
			? group.participants.map((item, index) => (
					<ChatItem data={findUser(users, item)} key={index} />
			  ))
			: null;

		return <ChatItem data={group} children={sub} key={index} />;
	});
};

export default GroupChats;
