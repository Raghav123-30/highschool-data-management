import mongoose from "mongoose";

const midDayMealItemSchema = new mongoose.Schema({
  highSchoolId: String,
  item: String,
  totalStock: Number,
  date: Date,
});

export const midDayMeal =
  mongoose.models.midDayMealItem ||
  mongoose.model("midDayMealItem", midDayMealItemSchema);
