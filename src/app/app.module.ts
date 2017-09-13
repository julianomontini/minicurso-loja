import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { InicioComponent } from "app/inicio/inicio.component";
import { CarrinhoComponent } from "app/carrinho/carrinho.component";
import { ProdutosComponent } from "app/produtos/produtos.component";
import { ProdutosService } from "app/produtos/produtos.service";
import { CarrinhoService } from "app/carrinho/carrinho.service";

const routes: Routes = [
  {path: "", redirectTo: "/inicio", pathMatch: 'full'},
  {path: "inicio", component: InicioComponent},
  {path: "carrinho", component: CarrinhoComponent},
  {path: "produtos", component: ProdutosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarrinhoComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProdutosService, CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
