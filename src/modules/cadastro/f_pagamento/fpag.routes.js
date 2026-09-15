import {Router} from "express";
import FpagController from "./fpag.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { auth } from "../../../core/middlewares/auth.middleware.js";
import { createFpagamentoDTO, updateFpagamentoDTO, getFpagamentoDTO} from "./fpag.dto.js";
import { authorize } from "../../../core/middlewares/authorize.js";

const router = Router();

router.post("/", 
    auth,
    authorize(1),
    validate(createFpagamentoDTO), 
    FpagController.create
);

router.get("/",
    auth,
    FpagController.getAll
);

router.get("/:id",
    auth,
    validate(getFpagamentoDTO, "params"),
    FpagController.getById
);

router.put("/:id",
    auth,
    authorize(1),
    validate(getFpagamentoDTO, "params"),
    validate(updateFpagamentoDTO), 
    FpagController.update
);

router.delete("/:id",
    auth,
    authorize(1),
    validate(getFpagamentoDTO, "params"), 
    FpagController.delete
);

export default router;