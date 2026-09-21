# Aula 07 - Projeto NestJS

Projeto desenvolvido durante a aula de Back-End com o objetivo de iniciar uma aplicação utilizando o framework **NestJS**, configurar o ambiente e criar uma rota simples para verificar o status do servidor.

---

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- npm
- ES Modules (ESM)

---

## 📁 Estrutura do projeto

A estrutura principal criada pelo NestJS ficou organizada da seguinte forma:

```text
aula07-projeto-nestjs/
├── dist/
├── node_modules/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── vitest.config.ts
## 📚 Conceitos praticados

Durante esta aula foram praticados os seguintes conceitos:

Criação de uma aplicação NestJS;
Utilização do Nest CLI;
Configuração de um projeto com TypeScript;
Utilização de ES Modules;
Controllers no NestJS;
Services no NestJS;
Decorators;
Injeção de dependências;
Rotas HTTP;
Método GET;
Criação de endpoint de status;
Execução da aplicação em modo watch;
Compilação automática com TypeScript;
Observabilidade do NestJS;
Organização de projeto Back-End;
Preparação do projeto para Git.
## 🎯 Resultado

Ao final da aula, foi criado um servidor utilizando NestJS com uma rota de status:

GET /status

Quando acessada, a rota utiliza o AppService para retornar:

Servidor Nest.JS Ativo [Aula07]

O projeto foi executado com sucesso e o NestJS confirmou no terminal o registro da rota e a inicialização da aplicação.
## 👨‍💻 Autor

Arthur Costa