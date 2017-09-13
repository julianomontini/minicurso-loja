import { ItemProduto } from "app/models/itemProduto";

export class CarrinhoService {
    private itensCarrinho: ItemProduto[] = [];

    getItensCarrinho() : ItemProduto[]{
     return this.itensCarrinho;   
    }
    addItemCarrinho(item: ItemProduto){
        let ip = this.itensCarrinho.find(i => {
            return (i.produto == item.produto)
        });

        if(ip == null){
            this.itensCarrinho.push(item);
        }else{
            ip.setQuantidade(ip.getQuantidade() + item.getQuantidade());
        }
    }
    removeItemCarrinho(item: ItemProduto, quantidade?: number){
        let ip = this.itensCarrinho.find(i => {
            return (i.produto == item.produto)
        });
        if(ip != null){
            if(quantidade == null)
                this.itensCarrinho.splice(this.itensCarrinho.indexOf(ip), 1);
            else if(quantidade <= ip.getQuantidade())
                ip.setQuantidade(ip.getQuantidade() - quantidade);
            else
                ip.setQuantidade(0);
        }
    }

    valorCompra(): number{
        let total: number = 0;
        for(let it of this.itensCarrinho)
            total += it.getValorTotal();
        return total;
    }
}