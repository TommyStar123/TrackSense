import mongoose from "mongoose"
const Schema = mongoose.Schema

const expenseSchema = new Schema({
	date: Date,
	amount: Number,
	vendor: String,
	category: String,
	comments: String,
})

export const Expense = mongoose.model("Expense", expenseSchema)