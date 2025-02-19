import { Router } from "express";
import { signUp, SignIn, SignOut } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', SignIn);
authRouter.post('/sign-out', SignOut);

export default authRouter;