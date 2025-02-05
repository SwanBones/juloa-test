import { Database, ref, onDisconnect } from "firebase/database";
import references from "../utils/databaseReferences";

export const onDisconnectGame = (roomId: number, userId: string, db: Database) => {
	const playerRef = ref(db, references.playerStatus(roomId, userId));
	const statusChangeDateRef = ref(db, references.playerStatusDate(roomId, userId));

	const onDisconnectRef = onDisconnect(playerRef);
	onDisconnectRef.set("offline");

	const onDisconnectDateRef = onDisconnect(statusChangeDateRef);
	onDisconnectDateRef.set(Date.now());
};

export const triggerOnDisconnect = (roomId: number, userId: string, db: Database) => {
	try {
		const presenceRef = ref(db, references.playerStatus(roomId, userId));
		const statusChangeDateRef = ref(db, references.playerStatusDate(roomId, userId));

		const onDisconnectRef = onDisconnect(presenceRef);
		const onDisconnectDateRef = onDisconnect(statusChangeDateRef);

		onDisconnectRef.set("offline");
		onDisconnectDateRef.set(Date.now().toString);

		onDisconnectDateRef.cancel();
		onDisconnectRef.cancel();
	} catch (err) {
		console.error(err);
	}
};
