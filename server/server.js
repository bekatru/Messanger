// Components
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Mock DB
const db = require("../src/data/db.json");

app.get("/", (req, res) => {
	res.send(db);
});

app.post("/", async (req, res) => {
	db.groups[0].messages.push(req.body);
	res.send(db);
});

const PORT = 3030;
app.listen(PORT, () => console.log(`Server listening on pot ${PORT}`));
