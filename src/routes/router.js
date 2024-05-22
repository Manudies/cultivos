
import {Router} from "express";

import userRouter from "./userRouter.js";
import cultivationRouter from "./projectRouter.js";
import commentRouter from "./taskRouter.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/users",userRouter);
router.use("/cultivations",cultivationRouter);
router.use("/comments",commentRouter);
router.use("/",authRouter)

export default router;