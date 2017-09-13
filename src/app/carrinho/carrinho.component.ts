import { Component } from "@angular/core";
import { ItemProduto } from "app/models/itemProduto";
import { CarrinhoService } from "app/carrinho/carrinho.service";

@Component({
    selector: "carrinho",
    templateUrl: "./carrinho.component.html",
    styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent{
    public itensCarrinho: ItemProduto[] = [];

    constructor(private carrinhoService: CarrinhoService){
        this.itensCarrinho = carrinhoService.getItensCarrinho();
    }

    mudaQuantidade(itemProduto: ItemProduto, add: boolean){
        if(add){
            itemProduto.setQuantidade(itemProduto.getQuantidade() + 1);
        }else{
            if(itemProduto.getQuantidade() == 1)
                this.itensCarrinho.splice(this.itensCarrinho.indexOf(itemProduto), 1);
            else
                itemProduto.setQuantidade(itemProduto.getQuantidade() - 1);
        }
    }

    itensCarrinhoSorted(){
        if(this.itensCarrinho == null || this.itensCarrinho == [])
            return [];

        return this.itensCarrinho.sort((a, b) => {
            return a.getValorTotal() - b.getValorTotal();
        })
    }

    produtoCaro(ip: ItemProduto): string{
        if(ip.getValorTotal() / this.carrinhoService.valorCompra() > 0.5)
            return "produto-caro"
    }
}