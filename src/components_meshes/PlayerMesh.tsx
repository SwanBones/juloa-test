import { PlayerPosition } from "@/types";
type PlayerMeshProps = {
	color: string;
	position: PlayerPosition;
};
export default function PlayerMesh(props: PlayerMeshProps) {
	const { color, position } = props;
	return (
		<mesh position={[position.x, position.y, 0]}>
			<boxGeometry />
			<meshStandardMaterial color={color} />
		</mesh>
	);
}
