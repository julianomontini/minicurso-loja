import { Component, OnInit } from "@angular/core";
import { Produto } from "app/models/produto";
import { ProdutosService } from "app/produtos/produtos.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CarrinhoService } from "app/carrinho/carrinho.service";
import { ItemProduto } from "app/models/itemProduto";

@Component({
    selector: "produtos",
    templateUrl: "./produtos.component.html",
    styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
    private produtos: Produto[] = [];
    private produtoEditando: Produto = null;
    private edit: boolean = false;
    private form: FormGroup = new FormGroup({
        nome: new FormControl('', [Validators.required]),
        valor: new FormControl('', [Validators.required])
    })
    
    constructor(private produtosService: ProdutosService, private carrinhoService: CarrinhoService){}

    ngOnInit(): void {
        this.produtos = this.produtosService.getProdutos();
    }

    onSubmit(){
        if(!this.edit)
            this.produtosService.addProduto(this.form.value)
        else{

            this.produtoEditando.nome = this.form.value.nome;
            this.produtoEditando.valor = this.form.value.valor;

            this.edit = false;
            this.produtoEditando = null
            this.form.patchValue({nome: '', valor: ''})
        }
    }

    onRemove(produto: Produto){
        this.produtosService.removeProduto(produto);
    }
    
    addToCart(produto: Produto){
        this.carrinhoService.addItemCarrinho(new ItemProduto(produto, 1))
    }

    onEdit(produto: Produto){
        this.produtoEditando = produto;
        this.form.patchValue({nome: produto.nome, valor: produto.valor})
        this.edit = true;
    }
    
}