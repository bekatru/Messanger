import React, { useState } from "react";

// icons
import smile from "../icons/smile.svg";
import attach from "../icons/attach.svg";
import { useForm } from "react-hook-form";

const Input = ({ handleSend }) => {
	const [value, setValue] = useState("");
	const { register, handleSubmit } = useForm({});

	const onSubmit = (data) => {
		if (value === "") return;
		data = {
			id: "#" + Math.random().toString(20).substr(2, 6),
			sender: "#ва",
			likes: 0,
			datetime: Date(),
			quote: null,
			checked: false,
			body: value,
		};
		handleSend(data);
		setValue("");
	};
	return (
		<form
			onKeyUp={(e) => {
				if (e.code === "Enter") {
					handleSubmit(onSubmit);
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
