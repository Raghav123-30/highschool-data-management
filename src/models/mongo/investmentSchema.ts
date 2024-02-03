import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
  investmentId: String,
  highSchoolId: String,
  item: String,
  singleStudentExpense: Number,
  totalExpense: Number,
  date: Date,
});

export const investment =
  mongoose.models.investment || mongoose.model("investment", investmentSchema);
