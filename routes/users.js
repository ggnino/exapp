const express = require("express");
const router = express.Router();

const User = require("../model/users");

router.get("/registered", (req, res) => {
	User.find()
		.sort("-_id")
		.limit(1)
		.then(u => {
			res.json(u);
		});
});
router.get("/", (req, res) => {
	User.find()
		.sort("_id")
		.then(u => {
			res.json(u);
		});
});
router.post("/", (req, res) => {
	const newUser = new User({ userName: req.body.userName });
	newUser
		.save()
		.then(u => res.json(u))
		.catch(err => res.status(400).json(err));
});
module.exports = router;
