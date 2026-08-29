import { Router } from "express";
import NivelController from "./nivel.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createNivelDTO, updateNivelDTO, getNivelDTO } from "./nivel.dto.js";
import { auth } from "../../../core/middlewares/auth.middleware.js";
import { authorize } from "../../../core/middlewares/authorize.js";

const router = Router();

router.post("/", 
    auth,
    authorize(1),
    validate(createNivelDTO), 
    NivelController.create
);

router.get("/", 
    auth,
    authorize(1),
    NivelController.getAll
);

router.get("/:id",
    auth,
    authorize(1),
    validate(getNivelDTO, "params"),
    NivelController.getById
);

router.put("/:id",
    auth,
    authorize(1),
    validate(getNivelDTO, "params"),
    validate(updateNivelDTO), 
    NivelController.update
);

router.delete("/:id",
    auth,
    authorize(1),
    validate(getNivelDTO, "params"), 
    NivelController.delete
);

export default router;