import app from "./server.js";
import mongodb from "mongodb";
// import ReviewDAO from "./dao/reviewDAO.js";
import config from "./config.js";

const MongoClient = mongodb.MongoClient;
const mongo_username = config.MONGO_USERNAME;
const mongo_password = config.MONGO_PASSWORD;
const URI = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.0ptufsg.mongodb.net/?retryWrites=true&w=majority`;

const port = 8000;

MongoClient.connect(URI, {
	maxPoolSize: 50,
	wtimeout: 2500,
	useNewUrlParse: true,
})
	.catch((err) => {
		console.error(err.stack);
		process.exit(1);
	})
	.then(async (client) => {
		await ReviewDAO.injectDB(client);
		app.listen(port, () => {
			console.log(`listening on port ${port}`);
		});
	});
