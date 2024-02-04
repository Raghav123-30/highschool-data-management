import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  highSchoolId: String,
  numberOfAttendees: Number,
  date: Date,
});

export const attendance =
  mongoose.models.attendance || mongoose.model("attendance", attendanceSchema);
