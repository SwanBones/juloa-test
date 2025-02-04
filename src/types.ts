export type LoginInfo = {
	username: string;
	color: string;
};

export type PlayerPosition = {
	x: number;
	y: number;
};

export type PlayerInfo = {
	username: string;
	position: PlayerPosition;
	color: string;
};

export type GameInfo = {
	room: number;
	playerInfo: PlayerInfo[];
};
