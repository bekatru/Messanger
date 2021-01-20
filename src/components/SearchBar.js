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
			<div>
				{value.length ? (
					<img
						onClick={() => {
							setValue("");
							setQuery("");
						}}
						src={clear}
						alt="clear"
					/>
				) : null}
				<img src={search} alt="search" />
				<img src={edit} alt="edit" style={{ opacity: 0.2 }} />
			</div>
		</div>
	);
};

export default SearchBar;
