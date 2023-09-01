import { Image, OrbitControls, Text } from "@react-three/drei";
import { extend, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

extend({ TextGeometry });

function Card() {
	const [open, setOpen] = useState(false);
	// const font = useLoader(
	// 	FontLoader,
	// 	""
	// );
	// const font = useLoader(
	// 	FontLoader,
	// 	"./fonts/Lexend_Deca/Lexend Deca_Regular.json"
	// );
	// console.log(font);
	// const loader = new FontLoader();
	// const font = loader.load(
	// 	// "/fonts/Rubik_Iso/RubikIso-Regular.json",
	// 	"/fonts/Lexend_Deca/Lexend Deca_Regular.json",
	// 	(font) => {}
	// );

	return (
		<>
			<OrbitControls />
			<group rotation-y={open ? -Math.PI / 6 : 0}>
				<group
					rotation-y={open ? -Math.PI / 1.5 : 0}
					onClick={() => {
						setOpen(!open);
					}}
				>
					<mesh position={[4, 0, 0.01]} castShadow={true}>
						<boxGeometry args={[8, 12, 0.1]} />
						<meshStandardMaterial color={"blue"} side={THREE.DoubleSide} />
					</mesh>
					<mesh position={[4, 0, -0.12]} visible={open}>
						<planeGeometry args={[8, 12, 1]} />
						<meshBasicMaterial side={THREE.BackSide} />
					</mesh>
					<Text position={[4, 4, 0.1]} color={"white"}>
						Happy Birthday!
					</Text>
					<Image url="/cake.jpg" position={[4, -2, 0.1]} scale={[8, 8, 1]} />
					{/* <mesh  >
						<textGeometry
							args={["Happy Birthday!", { font, size: 0.2, height: 1 }]}
						/>
						<meshPhysicalMaterial attach={"material"} color={"red"} />
					</mesh> */}
				</group>
				<group>
					<mesh position={[4, 0, 0.01]} receiveShadow={true}>
						<boxGeometry args={[8, 12, 0.1]} />
						<meshStandardMaterial color={"blue"} side={THREE.DoubleSide} />
					</mesh>
					<mesh position={[4, 0, 0.12]} visible={open}>
						<planeGeometry args={[8, 12, 1]} />
						<meshBasicMaterial />
					</mesh>
					<Text
						visible={open}
						position={[2, 3, 0.2]}
						scale={[0.8, 0.8, 1]}
						color={"black"}
					>
						To Nick
					</Text>
					<Text visible={open} position={[4, 0, 0.2]} color={"black"}>
						Happy Birthday!
					</Text>
					<Text
						visible={open}
						position={[3, -3, 0.2]}
						scale={[0.8, 0.8, 1]}
						color={"black"}
					>
						From all of us
					</Text>
				</group>
			</group>
		</>
	);
}

export default Card;
