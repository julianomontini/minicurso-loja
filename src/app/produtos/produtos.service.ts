import { Produto } from "app/models/produto";
import { OnInit } from "@angular/core";

export class ProdutosService{
    private produtos: Produto[] = [];

    constructor(){
        this.produtos.push(new Produto("Leite", 2.5));
        this.produtos.push(new Produto("Carne", 20));
        this.produtos.push(new Produto("Pasta de Dente", 3.50));
    }
    
    addProduto(produto: Produto){
        this.produtos.push(produto);
    }

    removeProduto(produto: Produto){
        this.produtos.splice(this.produtos.indexOf(produto), 1);
    }

    getProdutos(){
        return this.produtos;
    }
    
    setProdutos(produtos: Produto[]){
        this.produtos = produtos;
    }
}