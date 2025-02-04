import * as functions from "firebase-functions";

export const helpworld = functions.https.onRequest((request, response) => {
	response.send("help world!");
});

export const api = functions.https.onRequest((req, res) => {
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
