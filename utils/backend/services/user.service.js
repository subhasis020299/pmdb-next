import { connectDb } from "../db";
import User from "../../../models/user.model";

connectDb();

export const getUser = (query, projection = []) => {
	return new Promise((resolve, reject) => {
		User.findOne(query, projection)
			.then((user) => {
				resolve(user);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const createUser = (user) => {
	return new Promise((resolve, reject) => {
		User.create(user)
			.then((user) => {
				resolve(user);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const getUserWatchlist = (userId) => {
	return new Promise((resolve, reject) => {
		User.findById(userId, { watchlist: 1 })
			.populate({
				path: "watchlist",
				select: ["name", "poster", "rating", "genres", "year", "language"],
			})
			.then((user) => {
				resolve(user.watchlist);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const addToWatchlist = (userId, titleId) => {
	return new Promise((resolve, reject) => {
		User.findByIdAndUpdateId(
			userId,
			{ $push: { watchlist: titleId } },
			{ runValidators: true }
		)
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const removeFromWatchlist = (userId, titleId) => {
	return new Promise((resolve, reject) => {
		User.findByIdAndUpdateId(
			userId,
			{ $pull: { watchlist: titleId } },
			{ runValidators: true }
		)
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};
