import express from "express";
import { create, signIn, isAuthenticated, isAdmin } from "../../controllers/userController.js";
const router = express.Router();

router.post("/signup", create);
router.post("/signIn", signIn);
router.post("/isAuthenticated", isAuthenticated);
router.post("/isAdmin",isAdmin);

export { router as v1routes };
