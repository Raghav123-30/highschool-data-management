import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  attendanceId: String,
  highSchoolId: String,
  attendancePercentage: Number,
  date: Date,
});

export const attendance =
  mongoose.models.attendance || mongoose.model("attendance", attendanceSchema);
