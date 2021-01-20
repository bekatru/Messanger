// Utils
import { findUser } from "../../utils";

const Quote = ({ data, users }) => {
	if (!data) return null;
	const { name, surname } = findUser(users, data.sender);
	return (
		<div className="quote">
			<div className="quote_header">
				<p className="quote_header_name">{name + " " + surname}</p>
				<p className="quote_header_date"> 12.10.2020 12:12</p>
			</div>
			<p className="quote_body">{data.body}</p>
		</div>
	);
};

export default Quote;
