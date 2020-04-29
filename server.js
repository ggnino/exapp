const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./config/keys.js");
const app = express();
const users = require("./routes/users");
const exercise = require("./routes/exercises");
const path = require("path");

//app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Database Connection
mongoose
	.connect(db.mongoURI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log("ERROR: " + err));

const PORT = process.env.PORT || 5000;

// Routes
app.use("/users", cors(), users);
app.use("/exercise", cors(), exercise);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("exercise-app/build"));

	app.get("*", (req, res) => {
		res.sendFile(
			path.resolve(__dirname, "exercise-app", "build", "index.html")
		);
	});
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
