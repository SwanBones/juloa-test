import { GameInfo } from "@/types";
import { Card, Flex } from "antd";

type InGameCardProps = {
	gameInfo: GameInfo;
	userId: string;
};

export default function InGameCard(props: InGameCardProps) {
	const { gameInfo, userId } = props;
	return (
		<div id="ingame-card">
			<Card title="Players" style={{ width: "100%" }}>
				<ul>
					{Object.entries(gameInfo.playerInfo).map(([id, player]) => {
						return (
							<li style={{ listStyleType: "none" }} key={id}>
								<Flex justify="left">
									<div
										style={{
											width: "1.5em",
											borderRadius: "100%",
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
						);
					})}
				</ul>
			</Card>
		</div>
	);
}
