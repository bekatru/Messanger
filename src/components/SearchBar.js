import React, { useState } from "react";

// icons
import clear from "../icons/close.svg";
import search from "../icons/search.svg";
import edit from "../icons/edit.svg";

const SearchBar = ({ setQuery }) => {
	const [value, setValue] = useState("");
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
						src={clear}
						alt="clear"
					/>
				) : null}
				<img className="search" src={search} alt="clear" />
				<img className="edit" src={edit} alt="clear" />
			</div>
		</div>
	);
};

export default SearchBar;
