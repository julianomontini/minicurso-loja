export class Produto{
    constructor(public nome: string, public valor: number){

    }

    toString(){
        return "Nome: " + this.nome + " Valor: " + this.valor;
    }
}