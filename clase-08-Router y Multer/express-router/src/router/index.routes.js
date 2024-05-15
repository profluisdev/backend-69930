import { Router } from "express";
import usersRoutes from "./users.routes.js";
import petsRoutes from "./pets.routes.js";

const router = Router();

router.use("/users", usersRoutes);
router.use("/pets", petsRoutes);

export default router;
