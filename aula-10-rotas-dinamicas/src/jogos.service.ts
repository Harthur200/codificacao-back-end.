import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class JogosService {
    private jogos = [
        {id: 1, titulo: 'minecraft', estudio: 'Mojang Studios'},
        {id: 2, titulo: 'The Legend of Zelda: Ocarina of time' ,estudio: 'Nintendo'},
        {id: 3, titulo: 'Grand theft Auto V', estudio: 'Rockstar North'},
        {id: 4, titulo: 'Elden Ring', estudio: 'Fromsoftware'},
        {id: 5, titulo: 'God of war', estudio: 'Santa monica Studios'}
    ];
    
    buscarPorId(id:number){
        const jogo = this.jogos.find((j) => j.id === id);
        if(!jogo){
            throw new NotFoundException(`Jogo com ID ${id} não localizado em nosso estoque.`)
        }
        return jogo;
    }
}