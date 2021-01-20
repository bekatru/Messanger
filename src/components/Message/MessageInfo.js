// icons
import thumbsup from "../../icons/thumbsup.svg";
import check from "../../icons/check-line.svg";
import checkDouble from "../../icons/check-double.svg";

const MessageInfo = ({ data, user }) => {
	const status = data.checked ? (
		<img className="info_check" src={checkDouble} alt="checked" />
	) : (
		<img className="info_check" src={check} alt="check" />
	);

	return (
		<div className="info">
			{data.likes ? (
				<div className="info_likes">
					<img width="16" src={thumbsup} alt="+" />
					{data.likes}
				</div>
			) : null}
			<p className="info_time">14:23</p>
			{data.sender === user && status}
		</div>
	);
};

export default MessageInfo;
