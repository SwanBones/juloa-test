import { GameData } from "@/types";
import { Canvas } from "@react-three/fiber";
import PlayerMesh from "../components_meshes/PlayerMesh";

type GameCanvasProps = {
	gameInfo: GameData;
};
export default function GameCanvas(props: GameCanvasProps) {
	const { gameInfo } = props;
	return (
		<div id="game-frame">
			<Canvas>
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				{gameInfo.playerInfo &&
					Object.entries(gameInfo.playerInfo).map(([id, player]) => {
						return (
							id &&
							player.status === "online" && (
								<PlayerMesh
									key={id}
									color={player.color}
									position={{
										x: player.position.x,
										y: player.position.y,
									}}
								/>
							)
						);
					})}
			</Canvas>
			{/* {JSON.stringify(gameInfo)} <button onClick={move}>move diagonally</button> */}
		</div>
	);
}
