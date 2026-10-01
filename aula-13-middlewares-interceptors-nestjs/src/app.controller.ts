import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
@Get()
 getPublic(){
return {
  mensagem:'Rota Publica acessada com sucesso!',
  data: new Date(),
}
}

@Get('admin')
getPrivate(){
  return {
    mensagem:'Bem-Vindo ao Painel Administrativo',
    data: new Date(),
  }
 }
}
