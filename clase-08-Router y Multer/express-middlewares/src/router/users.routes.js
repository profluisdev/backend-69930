import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";
import { checkName } from "../middlewares/checkName.middleware.js";

const router = Router();

// Middleware a nivel router
router.use((req, res, next) => {

  console.log("Se ejecuto el router de users");
  
  next();
})

// Usuarios
let users = [];

router.get("/", (req, res) => {
  
  res.status(200).json(users);
})

router.post("/", checkName ,isAdmin, (req, res) => {
  const user = req.body;
  users.push(user);

  res.status(201).json({status: "success", msg: "Usuario guardado"});
})

export default router;

