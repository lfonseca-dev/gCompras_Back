import pool from "../../../core/database/data.js";

const ProdutoRepository = {
    async create(produto) {
        const [result] = await pool.execute("INSERT INTO produto (codigo, descricao) VALUES (?, ?)", [produto.codigo, produto.descricao]);
        return result;
    },

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM produto WHERE deleted_at IS NULL");
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM produto WHERE id = ? AND deleted_at IS NULL", [id]);
        return rows[0];
    },

    async getByCodigo(codigo) {
        const [rows] = await pool.query("SELECT * FROM produto WHERE codigo = ? AND deleted_at IS NULL", [codigo]);
        return rows[0];
    },

    async update(id, produto) {
        const [result] = await pool.execute("UPDATE produto SET codigo = ?, descricao = ?, updated_at = NOW() WHERE id = ?", 
            [produto.codigo, produto.descricao, id]);
        return result;
    },

    async delete(id) {
        const [result] = await pool.execute("UPDATE produto SET deleted_at = NOW() WHERE id = ?", [id]);
        return result;
    }
};

export default ProdutoRepository;