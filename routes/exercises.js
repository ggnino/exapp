const express = require("express");
const router = express.Router();

const Exercise = require("../model/exercise");

router.get("/", (req, res) => {
	Exercise.find()
		.sort({ userName: 1 })
		.then(ex => res.json(ex));
});

router.get("/:userName", (req, res) => {
	Exercise.find({ userName: req.params.userName })
		.sort({ userName: 1 })
		.then(ex => res.json(ex));
});

router.delete("/:id", (req, res) => {
	Exercise.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
});

router.post("/", (req, res) => {
	let exer = new Exercise({
		userName: req.body.userName,
		description: req.body.description,
		duration: req.body.duration,
		date: Date.parse(req.body.date)
	});

	exer
		.save()
		.then(ex => res.json(ex))
		.catch(err => res.status(400).json(err));
});

module.exports = router;
