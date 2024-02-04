import mongoose from "mongoose";
const dateSchema = new mongoose.Schema({
  date: Date,
});

export const date = mongoose.models.date || mongoose.model("date", dateSchema);
