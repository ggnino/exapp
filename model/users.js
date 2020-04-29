const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		userName: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		}
	},
	{ timestamps: true }
);
module.exports = User = mongoose.model("User", userSchema);
