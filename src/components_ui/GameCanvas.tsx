import { GameInfo } from "@/types";

type GameCanvasProps = {
	gameInfo: GameInfo;
	move: () => void;
};
export default function GameCanvas(props: GameCanvasProps) {
	const { gameInfo, move } = props;
	return (
		<div id="game-frame">
			{JSON.stringify(gameInfo)} <button onClick={move}>move diagonally</button>
		</div>
	);
}
