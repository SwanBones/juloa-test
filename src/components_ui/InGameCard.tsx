import { GameData } from "@/types";
import { Card, Flex } from "antd";
import ButtonHeader from "./ButtonHeader";
import { LeftOutlined } from "@ant-design/icons";

type InGameCardProps = {
	gameData: GameData;
	userId: string;
	backButtonOnClick: () => void;
};

export default function InGameCard(props: InGameCardProps) {
	const { gameData, userId, backButtonOnClick } = props;

	return (
		<div id="ingame-card">
			<Card
				title={
					<ButtonHeader
						buttonIcon={<LeftOutlined />}
						title={"Players"}
						onClick={() => {
							backButtonOnClick();
						}}
						tooltip="Back to menu (Change name / color)"
					/>
				}
				style={{ width: "100%" }}
			>
				<ul>
					{Object.entries(gameData.playerInfo).map(
						([id, player]) =>
							player.status === "online" && ( //dont render the player if they're offline
								<li style={{ listStyleType: "none" }} key={id}>
									<Flex justify="left">
										<div // Player Color
											className="player-color"
											style={{
												backgroundColor: player.color,
											}}
										></div>
										<p
											style={{
												margin: 0,
												marginLeft: 20,
												fontWeight: id === userId ? "bold" : "normal",
											}}
										>
											{player.username}
										</p>
									</Flex>
								</li>
							)
					)}
					{Object.keys(gameData.playerInfo).length === 1 && (
						<li style={{ marginTop: "1em" }}>Waiting for other players...</li>
					)}
				</ul>
			</Card>
		</div>
	);
}
