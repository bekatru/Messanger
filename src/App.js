import React, { useEffect, useState } from "react";
// Components
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import ChatList from "./components/Chatlist/ChatList";
import Header from "./components/Header";
import Thread from "./components/Thread";
import Input from "./components/Input";

//Utils
import { fetchGET, fetchPOST } from "./utils";

// Data
import { store } from "./data/data";
// Styles
import "./App.scss";
const App = () => {
	const [state, setState] = useState(store);
	const [query, setQuery] = useState("");

	// Fetch Data
	useEffect(() => {
		fetchGET("/").then((data) => setState(data));
	}, []);

	const handleSend = (data) => {
		fetchPOST("/", data).then((data) => setState(data));
	};

	const { user, users, groups } = state;
	return (
		<div className="App">
			<Nav user={user} />
			<div style={{ display: "flex" }}>
				<div>
					<SearchBar setQuery={(query) => setQuery(query)} />
					<ChatList data={state} query={query} />
				</div>
				<div>
					<Header data={groups[0]} />
					<Thread chat={groups[0]} users={users} user={user.id} />
					<Input handleSend={(data) => handleSend(data)} />
				</div>
			</div>
		</div>
	);
};

export default App;
