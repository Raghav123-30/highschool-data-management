import mongoose from "mongoose";

const highSchoolSchema = new mongoose.Schema({
  highSchoolId: String,
  userName: String,
  password: String,
  totalStrength: Number,
});

export const highSchool =
  mongoose.models.highSchool || mongoose.model("highSchool", highSchoolSchema);
