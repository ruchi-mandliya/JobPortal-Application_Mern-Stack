import express from "express";
import { registerController } from "../controllers/authController.js";
import router from "./testRoutes.js";

const Router = express.Router();

router.post("/register", registerController);

export default router;
