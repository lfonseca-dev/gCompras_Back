import EmpresaRouter from "./empresa/empresa.routes.js";
import FornecedorRouter from "./fornecedor/fornecedor.routes.js";
import RegimeTRouter from "./regimeTributario/regimeT.routes.js";
import ProdutoRouter from "./produto/produto.routes.js";
import FpagRouter from "./f_pagamento/fpag.routes.js";

const CadastroRoutes = [
    {
        module: "cadastro",
        path: "/empresa",
        router: EmpresaRouter
    },
    {
        module: "cadastro",
        path: "/fornecedor",
        router: FornecedorRouter
    },
    {
        module: "cadastro",
        path: "/regimeT",
        router: RegimeTRouter
    },
    {
        module: "cadastro",
        path: "/produto",
        router: ProdutoRouter
    },
    {
        module: "cadastro",
        path: "/fpagamento",
        router: FpagRouter
    }
];

export default CadastroRoutes;