# API de Produtos — NestJS

Repositório destinado ao desenvolvimento de uma API REST utilizando **NestJS** e **TypeScript**, com funcionalidades de listagem e busca de produtos por ID.

## ✒️ Objetivo

Desenvolver conhecimentos e habilidades relacionados à construção de APIs Back-End, trabalhando conceitos de controladores, serviços, rotas HTTP, validação de parâmetros, tratamento de exceções e organização de aplicações com NestJS.

## 🚀 Tecnologias

- **Node.js** — Ambiente de execução JavaScript no Back-End.
- **NestJS** — Framework para construção de aplicações Back-End escaláveis.
- **TypeScript** — Linguagem utilizada no desenvolvimento da aplicação.
- **NPM** — Gerenciador de pacotes e dependências.
- **Jest** — Ferramenta utilizada para testes automatizados.
- **Git** — Sistema de controle de versão.
- **GitHub** — Plataforma para hospedagem e versionamento remoto do projeto.

## 🛠️ Ferramentas utilizadas

- Visual Studio Code
- Node.js
- NPM
- NestJS CLI
- Git
- GitHub
- Terminal

## 📚 Funcionalidades

A API permite realizar operações de consulta de produtos, incluindo:

- Listagem de todos os produtos cadastrados;
- Busca de produtos por ID;
- Validação de IDs informados nas requisições;
- Tratamento de erros para IDs inválidos;
- Retorno de erro quando um produto não é encontrado;
- Registro de avisos utilizando o Logger do NestJS;
- Testes automatizados com Jest.

## 🔗 Endpoints

| Método HTTP | Rota | Descrição |
|---|---|---|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca um produto pelo ID |

### Exemplos de requisições

**Listar produtos:**

```http
GET http://localhost:3000/produtos
```

**Buscar produto por ID:**

```http
GET http://localhost:3000/produtos/1
```

### Tratamento de erros

- **400 Bad Request:** quando o ID informado não é numérico.
- **404 Not Found:** quando não existe produto com o ID solicitado.

## 📁 Organização

O projeto segue a estrutura de uma aplicação NestJS, separando controladores, serviços e testes.

```text
produtos-api/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── produtos.controller.ts
│   ├── produtos.service.ts
│   └── app.module.ts
├── test/
│   └── app.controller.spec.ts
├── package.json
├── tsconfig.json
└── README.md
```

*A estrutura apresentada é ilustrativa e pode variar conforme a organização real do projeto.*

## ▶️ Como executar o projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar a aplicação

```bash
npm run start:dev
```

Por padrão, a aplicação estará disponível em `http://localhost:3000`.

### 3. Executar os testes

```bash
npm run test
```

## 📝 Observações

- Os produtos são armazenados em uma lista em memória.
- A aplicação não utiliza banco de dados nesta versão.
- Os dados são definidos diretamente no `ProdutosService`.
- O endpoint de listagem precisa estar associado ao decorator `@Get()` no `ProdutosController`.

## 👨‍💻 Autor

**Arthur da Costa Costa**