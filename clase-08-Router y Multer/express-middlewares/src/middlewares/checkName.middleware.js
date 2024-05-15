import { request, response } from "express"


export const checkName = (req = request, res = response, next) => {
    const { name } = req.body;
    // Validamos si envían el nombre
    if(!name) return res.status(400).json({status: "Error", msg: "El nombre es requerido"});

    next();
 }