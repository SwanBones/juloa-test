import { GameInfo } from "@/types";
import React from "react";
import { Canvas } from "@react-three/fiber";
import PlayerMesh from "../components_meshes/PlayerMesh";
import { Controls } from "three";

type GameCanvasProps = {
	gameInfo: GameInfo;
};
export default function GameCanvas(props: GameCanvasProps) {
	const { gameInfo } = props;
	return (
		<div id="game-frame">
			<Canvas>
				<ambientLight intensity={Math.PI / 2} />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				{gameInfo.playerInfo &&
					Object.entries(gameInfo.playerInfo).map(([id, player]) => {
						return (
							<PlayerMesh
								color={player.color}
								position={{
									x: player.position.x,
									y: player.position.y,
								}}
							/>
						);
					})}
			</Canvas>
			{/* {JSON.stringify(gameInfo)} <button onClick={move}>move diagonally</button> */}
		</div>
	);
}
