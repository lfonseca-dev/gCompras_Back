import ProdutoService from "./produto.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const ProdutoController = {
    create: asyncHandler(async (req, res) => {
        const data = await ProdutoService.create(req.body);
        return response.created(res, {
            message: "Produto cadastrado",
            data
        });
    }),

    getAll: asyncHandler(async (req, res) => {
        const data = await ProdutoService.getAll();
        return response.success(res, {
            message: "Produto listados",
            data
        });
    }),

    getById: asyncHandler(async (req, res) => {
        const data = await ProdutoService.getById(req.params.id);
        return response.success(res, {
            message: "Produto encontrado",
            data
        });
    }),

    update: asyncHandler(async (req, res) => {
        const data = await ProdutoService.update(Number(req.params.id), req.body);
        return response.success(res, {
            message: "Produto atualizado",
            data
        });
    }),

    delete: asyncHandler(async (req, res) => {
        const data = await ProdutoService.delete(Number(req.params.id));
        return response.success(res, {
            message: "Produto excluído",
            data
        });
    })
};

export default ProdutoController;