import React from "react";

// icons
import smile from "../icons/smile.svg";
import attach from "../icons/attach.svg";

const Input = () => {
	return (
		<form className="input">
			<input
				className="input_message"
				name="message"
				placeholder="Написать Сообщение..."
			/>
			<div className="input_tools">
				<img width="24" src={smile} alt="emo" />
				<img width="24" src={attach} alt="emo" />
				<button type="submit">Отправить</button>
			</div>
		</form>
	);
};

export default Input;
