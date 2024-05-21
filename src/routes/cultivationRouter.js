import {Router} from "express";

import cultivationApiController from "../controllers/cultivations/cultivationApiController.js";


const router  = Router();

router.get("/",cultivationApiController.getAll);
router.get("/byproperty",cultivationApiController.getByProperty);
router.get("/:id",cultivationApiController.getById);
router.post("/",cultivationApiController.create);
router.put("/:id",cultivationApiController.update);
router.delete("/:id",cultivationApiController.remove);

export default router;