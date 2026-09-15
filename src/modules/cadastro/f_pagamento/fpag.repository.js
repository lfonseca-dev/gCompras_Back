import pool from "../../../core/database/data.js";

const FpagRepository = {
    async create(fpagamento) {
        const [result] = await pool.execute("INSERT INTO forma_pagamento (codigo, descricao) VALUES (?, ?)", [fpagamento.codigo, fpagamento.descricao]);
        return result;
    },

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM forma_pagamento WHERE deleted_at IS NULL");
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM forma_pagamento WHERE id = ? AND deleted_at IS NULL", [id]);
        return rows[0];
    },

    async getByCodigo(codigo) {
        const [rows] = await pool.query("SELECT * FROM forma_pagamento WHERE codigo = ? AND deleted_at IS NULL", [codigo]);
        return rows[0];
    },

    async update(id, fpagamento) {
        const [result] = await pool.execute("UPDATE forma_pagamento SET codigo = ?, descricao = ?, updated_at = NOW() WHERE id = ?", 
            [fpagamento.codigo, fpagamento.descricao, id]);
        return result;
    },

    async delete(id) {
        const [result] = await pool.execute("UPDATE forma_pagamento SET deleted_at = NOW() WHERE id = ?", [id]);
        return result;
    }
};

export default FpagRepository;