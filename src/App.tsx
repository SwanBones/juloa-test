import React, { useEffect, useState } from "react";
import config from "./config";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { generateUUID } from "./utils/generateValues";
import "./styles/App.css";
import MenuCard from "./components_ui/MenuCard";
import references from "./utils/databaseReferences";
import { GameInfo, LoginInfo, PlayerInfo } from "./types";
import GameCanvas from "./components_ui/GameCanvas";
import { message } from "antd";
import KeyboardListener from "./components_ui/KeyboardListener";
import InGameCard from "./components_ui/InGameCard";

function App() {
	const [messageApi, contextHolder] = message.useMessage();
	const [userId, setUserId] = useState<string>(generateUUID());
	const [ingame, setIngame] = useState<boolean>(false);
	const [gameInfo, setGameInfo] = useState<GameInfo | undefined>(undefined); //all game info is contained in here
	const [selfPlayerInfo, setSelfPlayerInfo] = useState<PlayerInfo>({
		username: "", //will be entered in form
		position: { x: 0, y: 0 }, //default position
		color: "", //will be generated by form
	});

	useEffect(() => {
		onValue(ref(db, references.players(1)), (snapshot) => {
			const data = snapshot.val();
			console.log(data);
			setGameInfo({ room: 1, playerInfo: data });
		});
	}, []);

	const app = initializeApp(config);
	const db = getDatabase();

	const showErrorMessage = () => {
		messageApi.open({
			type: "error",
			content: "There was an unexpected error",
		});
	};

	const manageEnterLobby = (values: LoginInfo) => {
		console.log(values);

		const playerInfo: PlayerInfo = {
			username: values.username,
			position: { x: 0, y: 0 },
			color: values.color.toHexString(),
		};
		setSelfPlayerInfo(playerInfo);
		set(ref(db, references.player(1, userId)), playerInfo)
			.then(() => {
				setIngame(true);
			})
			.catch(() => {
				showErrorMessage();
			}); //TODO: Handle multiple rooms.
	};
	const moveSelf = (x: number, y: number) => {
		selfPlayerInfo.position.x += x;
		selfPlayerInfo.position.y += y;
		set(ref(db, references.player(1, userId)), selfPlayerInfo).catch(() => {
			showErrorMessage();
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				{/*if we're not in the game*/}
				{!ingame && <MenuCard userId={userId} onFinish={manageEnterLobby} />}
				{/* if server responded correctly and there is data */}
				{ingame && gameInfo && (
					<div>
						<InGameCard gameInfo={gameInfo} userId={userId} />
						<GameCanvas gameInfo={gameInfo} />
					</div>
				)}

				<KeyboardListener
					handleUpPress={() => {
						moveSelf(0, 1);
					}}
					handleDownPress={() => {
						moveSelf(0, -1);
					}}
					handlelLeftPress={() => {
						//x coordinate is inverted for some reason. camera is probably upside down, but this can be put aside for now.
						moveSelf(1, 0);
					}}
					handlerRightPress={() => {
						moveSelf(-1, 0);
					}}
				/>
			</header>
		</div>
	);
}

export default App;
