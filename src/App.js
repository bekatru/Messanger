import "./App.scss";
import Header from "./components/navbar/Header";
import ChatItem from "./components/shared/ChatItem";

function App() {
	return (
		<div className="App">
			<Header />
			<ChatItem></ChatItem>
		</div>
	);
}

export default App;
