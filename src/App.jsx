import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Card from "./components/Card";

function App() {
	return (
		<>
			<Canvas
				style={{ width: "100vw", height: "100vh" }}
				shadows
				camera={{ position: [0, 0, 15], fov: 70 }}
			>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Card />
			</Canvas>
		</>
	);
}

export default App;
