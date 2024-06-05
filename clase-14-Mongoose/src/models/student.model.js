import mongoose from "mongoose";

const studentCollection = "students";

const studentSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dni: String,
  course: String,
  note: {
    type: Number,
    required: true
  },
});

export const studentModel = mongoose.model(studentCollection, studentSchema);
