import express from 'express';
import { logIn, signUp } from '../Controller/user.controller.js';
 const router = express.Router();

 router.post("/signUp", signUp)
 router.post("/logIn", logIn)

 export default router;