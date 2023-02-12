import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//Regist
router.post("/register", register);

//Login
router.post("/login", login);

//GetMe
router.get("/me", checkAuth, getMe);

export default router;
