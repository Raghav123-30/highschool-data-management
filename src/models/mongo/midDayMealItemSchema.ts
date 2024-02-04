import mongoose from "mongoose";

const midDayMealItemSchema = new mongoose.Schema({
  highSchoolId: String,
  itemName: String,
  totalStock: Number,
  totalStudents: {
    type: Number,
    default: 0,
  },
  date: Date,
});

export const midDayMeal =
  mongoose.models.midDayMealItem ||
  mongoose.model("midDayMealItem", midDayMealItemSchema);
