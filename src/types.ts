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
	id?: string;
	status?: "online" | "offline";
	statusChangeDate?: number;
};

export type GameData = {
	room: number;
	playerInfo: Record<string, PlayerInfo>;
};
