const references = {
	rooms() {
		return `room/`;
	},
	room(room: number) {
		return `room/${room}`;
	},
	players(room: number) {
		return `room/${room}/player`;
	},
	roomStatus(room: number) {
		// if room is full
		//TODO: (player goes into a room, and marks the room full if another player is already inside it.)
		return `room/${room}/status`;
	},
	player(room: number, userId: string) {
		return `room/${room}/player/${userId}`;
	},
	playerStatus(room: number, userId: string) {
		//player offline or online
		return `room/${room}/player/${userId}/status`;
	},
	playerStatusDate(room: number, userId: string) {
		//player offline or online
		return `room/${room}/player/${userId}/statusChangeDate`;
	},
	playerUsername(room: number, userId: string) {
		return `room/${room}/player/${userId}/username`;
	},
	playerPosition(room: number, userId: string) {
		return `room/${room}/player/${userId}/position`;
	},
	playerColor(room: number, userId: string) {
		return `room/${room}/player/${userId}/color`;
	},
};

export default references;
