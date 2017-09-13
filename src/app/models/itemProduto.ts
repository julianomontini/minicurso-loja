import { Produto } from "app/models/produto";

export class ItemProduto {
    constructor(public produto: Produto, public quantidade: number){}

    getValorTotal(): number{
        return this.produto.valor * this.quantidade;
    }

    getQuantidade(): number{
        return this.quantidade;
    }

    setQuantidade(quantidade: number): void{
        this.quantidade = quantidade;
    }
}