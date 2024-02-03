import mongoose from "mongoose";

const midDayMealItemSchema = new mongoose.Schema({
  id: String,
  highSchoolId: String,
  item: String,
  singleStudentRequirement: Number,
  totalStock: Number,
  date: Date,
});

export const midDayMeal =
  mongoose.models.midDayMealItem ||
  mongoose.model("midDayMealItem", midDayMealItemSchema);
