import React, { useState } from "react";
// Components
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import ChatList from "./components/ChatList";
import Header from "./components/Header";
import Thread from "./components/Thread";
import Input from "./components/Input";

// Data
import { store } from "./data/data";
// Styles
import "./App.scss";
const App = () => {
	console.log("mount");
	const [state, setState] = useState(store);
	const [query, setQuery] = useState("");
	const [activeChat, setActiveChat] = useState(state.groups[0]);

	const handleSend = (data) => {
		console.log(data);
	};
	return (
		<div className="App">
			<Nav user={state.user} />
			<div className="wrapper">
				<div>
					<SearchBar setQuery={(query) => setQuery(query)} />
					<ChatList data={state} query={query} />
				</div>
				<div>
					<Header data={activeChat} />
					<Thread chat={activeChat} users={state.users} user={state.user.id} />
					<Input handleSend={(data) => handleSend(data)} />
				</div>
			</div>
		</div>
	);
};

export default App;
