import ProdutoRepository from "./produto.repository.js";
import { AppError } from "../../../core/utils/AppError.js";

const ProdutoService = {
    async create(produto) {
        const existingproduto = await ProdutoRepository.getByCodigo(produto.codigo);

        if (existingproduto) {
            throw new AppError({
                message: "Código já cadastrado",
                reason: "CODIGO_ALREADY_EXISTS",
                statusCode: 409
            });
        }
        return await ProdutoRepository.create(produto);
    },

    async getAll() {
        return await ProdutoRepository.getAll();
    },

    async getById(id) {
        const produto = await ProdutoRepository.getById(id);

        if (!produto) {
            throw new AppError({
                message: "produto não encontrado",
                reason: "produto_NOT_FOUND",
                statusCode: 404
            });
        }
        return produto;
    },

    async getByCodigo(codigo) {
        const produto = await ProdutoRepository.getByCodigo(codigo);
        return produto;
    },

    async update(id, produto) {
        const existingproduto = await ProdutoRepository.getById(id);

        if (!existingproduto) {
            throw new AppError({
                message: "produto não encontrado",
                reason: "produto_NOT_FOUND",
                statusCode: 404
            });
        }
        return await ProdutoRepository.update(id, produto);
    },

    async delete(id) {
        const existingproduto = await ProdutoRepository.getById(id);

        if (!existingproduto) {
            throw new AppError({
                message: "produto não encontrado",
                reason: "produto_NOT_FOUND",
                statusCode: 404
            });
        }
        return await ProdutoRepository.delete(id);
    }
};

export default ProdutoService;