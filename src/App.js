import React, { useState } from "react";
// Components
import Nav from "./components/Nav";
// Data
import { store } from "./data/data";
// Styles
import "./App.scss";
const App = () => {
	const [state, setState] = useState(store);
	return (
		<div className="App">
			<Nav user={state.user} />
		</div>
	);
};

export default App;
