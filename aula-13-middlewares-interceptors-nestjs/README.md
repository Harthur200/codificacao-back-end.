📚 Aula 13 — Middleware e Controle de Acesso com NestJS
📌 Descrição

Nesta aula foi desenvolvido um projeto utilizando NestJS para compreender o funcionamento de Middlewares e sua utilização no processamento das requisições HTTP.

Foi criado um LoggerMiddleware, responsável por registrar informações das requisições recebidas pela aplicação e também realizar uma verificação de acesso para rotas administrativas.

Quando uma requisição é direcionada para uma rota que começa com /admin, o middleware verifica o Header x-user-base. Somente requisições que possuem o valor Administrador nesse Header podem continuar o processamento. Caso contrário, a API retorna o status 403 Forbidden.

O projeto também possui testes unitários e um teste E2E (End-to-End) utilizando Jest e Supertest.

🎯 Objetivos da Aula
Compreender o conceito de Middleware no NestJS;
Criar um Middleware personalizado;
Utilizar NestMiddleware;
Interceptar requisições HTTP;
Registrar método e rota acessada;
Trabalhar com Headers HTTP;
Implementar uma validação de acesso;
Utilizar o status HTTP 403 Forbidden;
Aplicar Middleware às rotas da aplicação;
Trabalhar com testes unitários;
Trabalhar com testes E2E;
Utilizar o Supertest para testar endpoints.
🛠️ Tecnologias Utilizadas
Node.js
NestJS
TypeScript
Express
Jest
Supertest
VS Code
Insomnia
📂 Estrutura do Projeto
aula13-middleware/
├── src/
│   ├── logger/
│   │   ├── logger.middleware.ts
│   │   └── logger.middleware.spec.ts
│   │
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── main.ts
│
├── test/
│   └── app.e2e-spec.ts
│
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md

🔎 O que é Middleware?

Um Middleware é uma função executada durante o processamento de uma requisição HTTP.

Ele pode ser utilizado para:

Registrar informações;
Validar dados;
Verificar autenticação;
Verificar permissões;
Modificar requisições;
Interromper requisições;
Encaminhar a requisição para o próximo processamento.

Neste projeto, o Middleware é utilizado tanto para logging quanto para uma verificação simples de privilégio administrativo.

📝 Registro das Requisições

O Middleware utiliza:

req.method

para descobrir o método HTTP utilizado.

Também utiliza:

req.path

para identificar o caminho acessado.

Essas informações são exibidas no terminal:

[LOG] Método: GET | Rota: /

Por exemplo, ao acessar:

GET /

o terminal poderá apresentar:

[LOG] Método: GET | Rota: /

🌐 URL da Requisição

O código também utiliza:

const currentUrl = req.originalUrl || req.url;

O originalUrl permite obter a URL original da requisição.

Caso não esteja disponível, o código utiliza:

req.url

Essa informação é utilizada posteriormente para identificar se a rota pertence à área administrativa.

🔐 Controle de Acesso

O Middleware verifica se a URL começa com:

/admin

através de:

if (currentUrl.startsWith('/admin'))

Quando isso acontece, o Middleware verifica o Header:

x-user-base

O valor é obtido através de:

const base = req.headers['x-user-base'];

👨‍💼 Privilégio de Administrador

Para continuar o processamento de uma rota /admin, o Header precisa possuir:

x-user-base: Administrador

A verificação é realizada através de:

if (base !== 'Administrador')

Caso o valor seja diferente de Administrador, a requisição é bloqueada.

🚫 Acesso Negado

Quando uma requisição administrativa não possui o privilégio necessário, o Middleware retorna:

return res.status(403).json({
  Codigo: 403,
  menssagem: 'Acesso Negado: Previlégio de Aministrator necessário',
  registro: new Date,
});

O status retornado é:

403 Forbidden

Exemplo de resposta:

{
  "Codigo": 403,
  "menssagem": "Acesso Negado: Previlégio de Aministrator necessário",
  "registro": "2026-09-30T..."
}

📚 Conceitos Aprendidos

Nesta aula foram trabalhados os seguintes conceitos:

Middleware;
NestMiddleware;
MiddlewareConsumer;
@Injectable();
Request;
Response;
NextFunction;
req.method;
req.path;
req.originalUrl;
Headers HTTP;
Controle de acesso;
Status HTTP 403 Forbidden;
next();
Testes unitários;
Testes E2E;
Jest;
Supertest.

👨‍💻 Autor

Arthur da Costa