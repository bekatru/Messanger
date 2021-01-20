import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";

// Utils
import { searchChats } from "../../utils";

const SearchResults = ({ data, query }) => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		setResults(searchChats(data, query));
	}, [query, data]);

	return results.length ? (
		results.map((item, index) => <ChatItem key={index} data={item} />)
	) : (
		<p style={{ textAlign: "center" }}>Ничего не найдено</p>
	);
};

export default SearchResults;
