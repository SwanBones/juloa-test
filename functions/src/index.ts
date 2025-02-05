import * as functionsV2 from "firebase-functions/v2";
// import * as functionsV1 from "firebase-functions/v1";
import admin from "firebase-admin";

admin.initializeApp({});
//these are just for testing, for now.

export const helpworld = functionsV2.https.onRequest((request, response) => {
	response.send("help world!");
});

export const api = functionsV2.https.onRequest((req, res) => {
	switch (req.method) {
		case "GET":
			res.send("this was GET");
			break;
		case "POST":
			const body = req.body;
			res.send(body);
			break;
		case "DELETE":
			res.send("this was DELETE");
			break;
		default:
			res.send("this was default");
	}
});

// export const deletePlayerOnOffline = functionsV1
// 	.region("europe-west4")
// 	.database.ref("/room/{roomId}/player/{uid}/status")
// 	.onWrite(async (change, context) => {
// 		const newStatus = change.after.val();
// 		const { roomId, uid } = context.params;

// 		if (newStatus === "offline") {
// 			try {
// 				await admin.database().ref(`/room/${roomId}/player/${uid}`).remove();
// 				console.log(`Player ${uid} removed from room ${roomId}`);
// 			} catch (error) {
// 				console.error(`Failed to remove player ${uid}:`, error);
// 			}
// 		}
// 	});
