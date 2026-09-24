import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ConvidadosService {
  private convidados = [
    { id: 1, nome: 'Rebeca', idade: 23 },
    { id: 2, nome: 'Liam', idade: 25 },
    { id: 3, nome: 'Cauê', idade: 20 },
    { id: 4, nome: 'Emanuelly', idade: 21 },
    { id: 5, nome: 'Jamily', idade: 20 },
    { id: 6, nome: 'Vitória', idade: 22 },
  ];

  // GET /convidados
  listarConvidados() {
    return this.convidados;
  }

  // GET /convidados/:id
  buscarPorId(id: number) {
    const convidado = this.convidados.find(
      (convidado) => convidado.id === id,
    );

    if (!convidado) {
      throw new NotFoundException(
        `Convidado com ID ${id} não encontrado`,
      );
    }

    return convidado;
  }

  // POST /convidados
  criarConvidado(nome: string, idade: number) {
    const novoConvidado = {
      id: this.convidados.length + 1,
      nome,
      idade,
    };

    this.convidados.push(novoConvidado);

    return novoConvidado;
  }

  // PATCH /convidados/:id
  atualizarIdade(id: number, idade: number) {
    const convidado = this.buscarPorId(id);

    convidado.idade = idade;

    return convidado;
  }

  // DELETE /convidados/:id
  removerConvidado(id: number) {
    const convidado = this.buscarPorId(id);

    this.convidados = this.convidados.filter(
      (convidado) => convidado.id !== id,
    );

    return convidado;
  }
}