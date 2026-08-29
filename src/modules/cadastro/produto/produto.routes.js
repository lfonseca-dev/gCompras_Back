import {Router} from "express";
import ProdutoController from "./produto.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { auth } from "../../../core/middlewares/auth.middleware.js";
import { createProdutoDTO, updateProdutoDTO, getProdutoDTO } from "./produto.dto.js";
import { authorize } from "../../../core/middlewares/authorize.js";

const router = Router();

router.post("/", 
    auth,
    validate(createProdutoDTO), 
    ProdutoController.create
);

router.get("/",
    auth,
    ProdutoController.getAll
);

router.get("/:id",
    auth,
    validate(getProdutoDTO, "params"),
    ProdutoController.getById
);

router.put("/:id",
    auth,
    authorize(1,2),
    validate(getProdutoDTO, "params"),
    validate(updateProdutoDTO), 
    ProdutoController.update
);

router.delete("/:id",
    auth,
    authorize(1,2),
    validate(getProdutoDTO, "params"), 
    ProdutoController.delete
);

export default router;