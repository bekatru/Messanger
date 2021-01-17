import React from "react";

// icons
import close from "../icons/close.svg";
import search from "../icons/search.svg";
import edit from "../icons/edit.svg";

const SearchBar = ({ setQuery }) => {
	const [value, setValue] = React.useState("");
	const handleChange = (e) => {
		setValue(e.target.value);
		setQuery(value);
	};
	return (
		<div className="searchbar">
			<input
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
					setQuery(e.target.value);
				}}
			/>
			<div className="icons">
				{value.length ? (
					<img
						onClick={() => {
							setValue("");
							setQuery("");
						}}
						className="clear"
						src={close}
						alt="clear"
					/>
				) : null}
				<img className="search" width="17" src={search} alt="clear" />
				<img className="edit" width="17" src={edit} alt="clear" />
			</div>
		</div>
	);
};

export default SearchBar;
