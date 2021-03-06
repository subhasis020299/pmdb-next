import { Schema, model, models } from "mongoose";

const titleSchema = new Schema(
	{
		type: {
			type: String,
			enum: ["movie", "series", "anime"],
			default: "movie",
		},
		name: {
			type: String,
			required: [true, "Title name is required"],
			index: true,
		},
		poster: {
			type: String,
			required: [true, "Title poster is required"],
		},
		trailerLink: {
			type: String,
			required: [true, "Title trailerLink is required"],
		},
		year: {
			type: Number,
			required: [true, "Title year is required"],
		},
		genres: {
			type: String,
			required: [true, "Title genres is required"],
			index: true,
		},
		cast: {
			type: String,
			required: [true, "Title cast is required"],
		},
		directedBy: {
			type: String,
			required: [true, "Title directedBy is required"],
		},
		writtenBy: {
			type: String,
			required: [true, "Title writtenBy is required"],
		},
		runtime: {
			type: Number,
			required: [true, "Title runtime is required"],
		},
		language: {
			type: String,
			required: [true, "Title language is required"],
			indexed: true,
		},
		plot: {
			type: String,
			minlength: [10, "Plot must be atleast 10 characters long"],
			maxlength: [1000, "Plot must be atmost 1000 characters long"],
		},
		reviewCount: {
			type: Number,
			default: 0,
		},
		rating: {
			type: Number,
			default: 0,
			index: true,
		},
		streamingOn: [
			{
				name: { type: String, required: true },
				url: { type: String, required: true },
				code: {
					type: String,
					required: true,
					enum: ["netflix", "prime", "hotstar", "youtube", "other"],
				},
			},
		],
	},
	{ timestamps: true }
);

module.exports = models.Title || model("Title", titleSchema);
