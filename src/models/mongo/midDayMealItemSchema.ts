import mongoose from "mongoose";

const midDayMealItemSchema = new mongoose.Schema({
  highSchoolId: String,
  itemName: String,
  totalStock: Number,
  usedQuantity: {
    type: Number,
    default: 0,
  },
  totalStudents: {
    type: Number,
    default: 0,
  },
  date: Date,
});

export const midDayMeal =
  mongoose.models.midDayMealItems ||
  mongoose.model("midDayMealItems", midDayMealItemSchema);
