import FpagRepository from "./fpag.repository.js";
import { AppError } from "../../../core/utils/AppError.js";

const FpagService = {
    async create(fpagamento) {
        const existingfpagamento = await FpagRepository.getByCodigo(fpagamento.codigo);

        if (existingfpagamento) {
            throw new AppError({
                message: "Código já cadastrado",
                reason: "CODIGO_ALREADY_EXISTS",
                statusCode: 409
            });
        }
        return await FpagRepository.create(fpagamento);
    },

    async getAll() {
        return await FpagRepository.getAll();
    },

    async getById(id) {
        const fpagamento = await FpagRepository.getById(id);

        if (!fpagamento) {
            throw new AppError({
                message: "Forma de pagamento não encontrada",
                reason: "FORMA_PAGAMENTO_NOT_FOUND",
                statusCode: 404
            });
        }
        return fpagamento;
    },

    async getByCodigo(codigo) {
        const fpagamento = await FpagRepository.getByCodigo(codigo);
        return fpagamento;
    },

    async update(id, fpagamento) {
        const existingfpagamento = await FpagRepository.getById(id);

        if (!existingfpagamento) {
            throw new AppError({
                message: "Forma de pagamento não encontrada",
                reason: "FORMA_PAGAMENTO_NOT_FOUND",
                statusCode: 404
            });
        }
        return await FpagRepository.update(id, fpagamento);
    },

    async delete(id) {
        const existingfpagamento = await FpagRepository.getById(id);

        if (!existingfpagamento) {
            throw new AppError({
                message: "Forma de pagamento não encontrada",
                reason: "FORMA_PAGAMENTO_NOT_FOUND",
                statusCode: 404
            });
        }
        return await FpagRepository.delete(id);
    }
};

export default FpagService;