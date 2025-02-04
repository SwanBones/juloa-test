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
	player(room: number, userId: string) {
		return `room/${room}/player/${userId}`;
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
