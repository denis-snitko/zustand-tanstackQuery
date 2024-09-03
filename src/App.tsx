import Photo from "./components/Photo";
import Buttons from "./components/Buttons";

import "./styles/styles.css";

export default function App() {
	return (
		<div className="App">
			<h1>Zustand + Tanstack</h1>
			<div className="fixed-container">
				<Photo />
			</div>
			<Buttons />
		</div>
	);
}
