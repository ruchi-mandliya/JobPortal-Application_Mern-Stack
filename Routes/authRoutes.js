import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import router from "./testRoutes.js";

const Router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

export default router;
