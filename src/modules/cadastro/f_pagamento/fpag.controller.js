import FpagService from "./fpag.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const FpagController = {
    create: asyncHandler(async (req, res) => {
        const data = await FpagService.create(req.body);
        return response.created(res, {
            message: "Forma de pagamento cadastrada",
            data
        });
    }),

    getAll: asyncHandler(async (req, res) => {
        const data = await FpagService.getAll();
        return response.success(res, {
            message: "Formas de pagamento listadas",
            data
        });
    }),

    getById: asyncHandler(async (req, res) => {
        const data = await FpagService.getById(req.params.id);
        return response.success(res, {
            message: "Forma de pagamento encontrada",
            data
        });
    }),

    update: asyncHandler(async (req, res) => {
        const data = await FpagService.update(Number(req.params.id), req.body);
        return response.success(res, {
            message: "Forma de pagamento atualizada",
            data
        });
    }),

    delete: asyncHandler(async (req, res) => {
        const data = await FpagService.delete(Number(req.params.id));
        return response.success(res, {
            message: "Forma de pagamento excluída",
            data
        });
    })
};

export default FpagController;