import {Router} from "express";

import userApiController from "../controllers/users/userApiController.js";


const router  = Router();

router.get("/register",userApiController.register);
router.get("/login",userApiController.login);

export default router;