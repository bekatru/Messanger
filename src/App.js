import React, { useEffect, useState } from "react";
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
	const [state, setState] = useState(store);
	const [query, setQuery] = useState("");

	// Fetch Data
	useEffect(() => {
		fetch("http://localhost:3030/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setState(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleSend = (data) => {
		fetch("http://localhost:3030/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => setState(data))
			.catch((err) => console.log(err));
	};

	let application = <div>Loading</div>;
	application = (
		<div className="App">
			<Nav user={state.user} />
			<div className="wrapper">
				<div>
					<SearchBar setQuery={(query) => setQuery(query)} />
					<ChatList
						data={state}
						query={query}
						// setActiveChat={() => setActiveChat(data)}
					/>
				</div>
				<div>
					<Header data={state.groups[0]} />
					<Thread
						chat={state.groups[0]}
						users={state.users}
						user={state.user.id}
					/>
					<Input handleSend={(data) => handleSend(data)} />
				</div>
			</div>
		</div>
	);

	return application;
};

export default App;
