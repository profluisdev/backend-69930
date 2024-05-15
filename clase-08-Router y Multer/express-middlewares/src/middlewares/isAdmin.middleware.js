import { request, response } from "express";

export const isAdmin = (req = request, res = response, next) => {
  const { role } = req.body;

  if (!role) return res.status(400).json({ status: "Error", msg: "El usuario debe tener un rol" });

  if (role.toLowerCase() !== "admin") return res.status(400).json({ status: "Error", msg: "Usuario no autorizado" });

  next();
};
