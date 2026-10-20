import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosService {
    produtos = [
     {id: 1, nome: 'arroz namorados', preco: 9.99},
    {id: 2, nome: 'feijão timbiras', preco: 7.99},
    {id: 3, nome: 'macarrão galo', preco: 5.99},
     {id: 4, nome: 'açúcar União', preco: 4.99},
      {id: 5, nome: 'sal Lebre', preco: 2.99},
    ];

    listarProdutos() {
        return this.produtos;
    }
}