import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CriarConvidadoDto } from './criar-convidado.dto.js';

@Controller('convidados')
export class ConvidadosController {

  private convidados = [
    { id: 1, nome: 'Rebeca', idade: 23 },
    { id: 2, nome: 'Liam', idade: 25 },
    { id: 3, nome: 'Cauê', idade: 20 },
    { id: 4, nome: 'Emanuelly', idade: 21 },
    { id: 5, nome: 'Jamily', idade: 20 },
    { id: 6, nome: 'Vitória', idade: 22 },
  ];

  @Get()
  listarConvidados() {
    return this.convidados;
  }

  @Post()
  criarConvidado(@Body() criarConvidado: CriarConvidadoDto) {
    console.log(
      `[Operadora Nayra] Novo convidado Registrado: ${criarConvidado.nome}`,
    );

    const novoConvidado = {
      id: this.convidados.length + 1,
      nome: criarConvidado.nome,
      idade: criarConvidado.idade,
    };

    this.convidados.push(novoConvidado);

    return {
      mensagem: `Convidado ${criarConvidado.nome}, foi adicionado(a) com sucesso!`,
      dados: novoConvidado,
    };
  }

  @Patch(':id')
  atualizarIdade(
    @Param('id') id: string,
    @Body('idade') idade: number,
  ) {
    console.log(`[PATCH] Atualizando convidado com ID: ${id}`);

    const convidado = this.convidados.find(
      (convidado) => convidado.id === +id,
    );

    if (!convidado) {
      return {
        mensagem: `Convidado com ID ${id} não encontrado.`,
      };
    }

    convidado.idade = idade;

    return {
      mensagem: `Idade do convidado ${convidado.nome} atualizada com sucesso!`,
      dados: convidado,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  removerConvidado(@Param('id') id: string) {
    console.log(`[DELETE] Removendo convidado com ID: ${id}`);

    this.convidados = this.convidados.filter(
      (convidado) => convidado.id !== +id,
    );
  }
}