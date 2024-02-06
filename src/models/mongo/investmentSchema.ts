import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
  highSchoolId: String,
  itemName: String,
  studentCount: Number,
  totalExpense: Number,
  date: Date,
});

export const investment =
  mongoose.models.investment || mongoose.model("investment", investmentSchema);
