import React from "react";

// icons
import smile from "../icons/smile.svg";
import attach from "../icons/attach.svg";
import { useForm } from "react-hook-form";

const Input = ({ handleSend }) => {
	const [value, setValue] = React.useState("");
	const { register, handleSubmit } = useForm({});

	const onSubmit = (data) => {
		data.message = value;
		handleSend(data);
	};
	return (
		<form
			onKeyDown={(e) => {
				if (e.code === "Enter") {
					handleSubmit(onSubmit);
				}
			}}
			onKeyUp={(e) => {
				if (e.code === "Enter") {
					setValue("");
				}
			}}
			className="input"
			onSubmit={handleSubmit(onSubmit)}
		>
			<input
				autoComplete="off"
				ref={register}
				className="input_message"
				name="message"
				placeholder="Написать Сообщение..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
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
