import { Router } from "express";

const router = Router();

// Usuarios
let users = [];

router.get("/", (req, res) => {
  
  res.status(200).json(users);
})

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);

  res.status(201).json({status: "success", msg: "Usuario guardado"});
})

export default router;

