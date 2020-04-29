const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	userName: { type: String, required: true },
	description: { type: String },
	duration: { type: Number, required: true },
	date: { type: Date, required: true }
});

module.exports = Exercise = mongoose.model("Exercise", exerciseSchema);
