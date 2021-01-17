import React, { useState } from "react";
// Components
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import ChatList from "./components/ChatList";

// Data
import { store } from "./data/data";
// Styles
import "./App.scss";
const App = () => {
	const [state, setState] = useState(store);
	const [query, setQuery] = useState("");
	return (
		<div className="App">
			<Nav user={state.user} />
			<SearchBar setQuery={(query) => setQuery(query)} />
			<ChatList data={state} query={query} />
		</div>
	);
};

export default App;
