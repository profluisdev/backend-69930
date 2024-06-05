import { Router } from "express";
import { studentModel } from "../models/student.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();

    res.status(200).json({ status: "success", payload: students });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ status: "Error", msg: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findById(id);
    if(!student) return res.status(404).json({status: "Error", msg: "Student not found"});

    res.status(200).json({ status: "success", payload: student });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ status: "Error", msg: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const studentData = req.body;
    const student = await studentModel.create(studentData);

    res.status(200).json({ status: "success", payload: student });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({ status: "Error", msg: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const student = await studentModel.findByIdAndUpdate(id, body);
    const studentUpdate = await studentModel.findById(id);

    res.json({ status: "success", payload: studentUpdate });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const student = await studentModel.deleteOne({_id: id});

    res.json({ status: "success", payload: "Alumno eliminado con éxito" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
