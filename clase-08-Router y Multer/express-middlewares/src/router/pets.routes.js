import { Router } from "express";
import { checkName } from "../middlewares/checkName.middleware.js";

const router = Router();
// Mascotas
let pets = [];

router.get("/", (req, res) => {
  
  res.status(200).json(pets);
})

router.post("/", checkName, (req, res) => {
  const pet = req.body;
  pets.push(pet);

  res.status(201).json({status: "success", msg: "Mascota guardada"});
})

export default router;