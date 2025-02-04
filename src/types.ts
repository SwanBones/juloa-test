import { AggregationColor } from "antd/es/color-picker/color";

export type LoginInfo = {
	username: string;
	color: AggregationColor;
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
	playerInfo: Record<string, PlayerInfo>;
};
