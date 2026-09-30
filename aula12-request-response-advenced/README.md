# 🔐 Aula 12 — Request e Response Avançados

Projeto desenvolvido durante a disciplina de **Codificação para Back-End**, utilizando **NestJS** e **TypeScript**.

Nesta aula foi desenvolvido um exemplo de proteção de uma rota utilizando **API Key enviada através de um Header HTTP**, além da utilização de respostas HTTP personalizadas com `Response` do Express.

---

## 📚 Sobre a Aula

O projeto apresenta uma API simples com duas áreas principais:

- 🟢 **Status do servidor**
- 🔐 **Área secreta protegida por API Key**

A aplicação utiliza Controllers, Services e Module para organizar a estrutura do projeto.

---

## 🎯 Objetivos

- Criar uma rota para verificar o status do servidor;
- Trabalhar com `Headers` HTTP;
- Receber uma API Key através de um Header;
- Validar uma chave de acesso;
- Retornar diferentes códigos HTTP;
- Utilizar `@Res()` para controlar a resposta;
- Retornar respostas em formato JSON;
- Organizar a aplicação utilizando a arquitetura do NestJS.

---

# 🛠️ Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- Express
- npm

---

# 📁 Estrutura do Projeto

```text
aula12-request-response-advanced/
│
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── seguranca.controller.ts
│
├── test/
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

🟢 AppService

Arquivo:

src/app.service.ts

Código:

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Status: Servidor Ativo!';
  }
}
🔎 Funcionamento

O AppService é responsável por fornecer a mensagem de status do servidor.

O decorator:

@Injectable()

permite que o NestJS utilize a classe como um Provider/Service.

O método:

getHello()

retorna:

Status: Servidor Ativo!

🟢 AppController

Arquivo:

src/app.controller.ts

Código:

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
🔎 Funcionamento

O decorator:

@Controller('status')

define o caminho base:

/status

O:

@Get()

define uma requisição HTTP do tipo GET.

Portanto, podemos acessar:

GET http://localhost:3000/status

O Controller chama:

this.appService.getHello()

e recebe a mensagem:

Status: Servidor Ativo!

3. SegurancaController

Arquivo:

src/seguranca.controller.ts

Código:

import { Controller, Get, Headers, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('secret')
export class SegurancaController {
  @Get()
  acessAreaSecret(
    @Headers('y-api-key') apiKey: string,
    @Res() res: Response,
  ) {
    if (apiKey !== 'FULLSTACK-2026') {
      return res.status(403).json({
        erro: 'Forbidden',
        mensagem: 'Chave API inválida ou ausente',
        log: new Date(),
      });
    }

    return res.status(200).json({
      message: 'Acesso concedido a Area Secreta!',
      log: new Date(),
    });
  }
}
🔑 Rota da Área Secreta

O decorator:

@Controller('secret')

cria a rota:

/secret

E:

@Get()

define que a rota utiliza o método:

GET

Portanto:

GET http://localhost:3000/secret

📨 Utilizando Headers

Um dos principais conceitos da aula é a utilização de Headers HTTP.

O código utiliza:

@Headers('y-api-key') apiKey: string

Isso significa que o NestJS irá procurar um Header chamado:

y-api-key

Exemplo de requisição:

GET /secret
y-api-key: FULLSTACK-2026

O valor do Header será recebido pela variável:

apiKey

🔐 Validação da API Key

O código verifica:

if (apiKey !== 'FULLSTACK-2026')

Ou seja:

Se a API Key recebida for diferente de FULLSTACK-2026, o acesso será negado.

❌ API Key Inválida

Quando a chave está incorreta ou não foi enviada:

return res.status(403).json({
  erro: 'Forbidden',
  mensagem: 'Chave API inválida ou ausente',
  log: new Date(),
});

A API retorna o status:

403 Forbidden

E um JSON semelhante a:

{
  "erro": "Forbidden",
  "mensagem": "Chave API inválida ou ausente",
  "log": "2026-09-29T..."
}
Exemplo
GET http://localhost:3000/secret

Sem Header:

y-api-key

Resultado:

403 Forbidden

✅ API Key Válida

Quando a chave enviada é:

FULLSTACK-2026

a condição:

apiKey !== 'FULLSTACK-2026'

será falsa.

Então a API executará:

return res.status(200).json({
  message: 'Acesso concedido a Area Secreta!',
  log: new Date(),
});

Resultado:

200 OK

Com:

{
  "message": "Acesso concedido a Area Secreta!",
  "log": "2026-09-29T..."
}

📌 Utilização do @Res()

O código utiliza:

@Res() res: Response

O Response vem do Express:

import type { Response } from 'express';

Isso permite controlar diretamente a resposta HTTP.

Por exemplo:

res.status(403)

define o status HTTP.

E:

.json({...})

envia uma resposta JSON.

Exemplo:
res.status(200).json({
  message: 'Acesso concedido a Area Secreta!'
});

Significa:

Status HTTP: 200
Formato: JSON
Conteúdo: mensagem de acesso

🧩 AppModule

Arquivo:

src/app.module.ts

Código:

import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { SegurancaController } from './seguranca.controller.js';

@Module({
  imports: [],
  controllers: [
    AppController,
    SegurancaController,
  ],
  providers: [AppService],
})
export class AppModule {}

O AppModule organiza os componentes utilizados pela aplicação.

Controllers
controllers: [
  AppController,
  SegurancaController,
]

Registra:

AppController
SegurancaController
Providers
providers: [AppService]

Registra o:

AppService