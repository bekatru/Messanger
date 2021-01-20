// Components
import Avatar from "../Shared/Avatar";
import MessageInfo from "./MessageInfo";
import Quote from "./Quote";

// Utils
import { findUser } from "../../utils";

const Message = ({ users, message, user }) => {
	const { quote, sender, body } = message;
	return (
		<div className={`message ${sender === user ? "left" : ""}`}>
			{sender !== user && <Avatar data={findUser(users, sender)} size="L" />}
			<div className={`message_body`}>
				<Quote data={quote} users={users} />
				<p>{body}</p>
				<MessageInfo data={message} user={user} />
			</div>
		</div>
	);
};

export default Message;
