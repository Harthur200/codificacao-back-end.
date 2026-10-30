# 🎓 API de Gestão de Alunos

## 📌 Sobre o Projeto

Este projeto consiste numa API REST desenvolvida com **NestJS**, **TypeScript** e **MongoDB**, com o objetivo de realizar o gerenciamento de alunos de uma instituição de ensino.

A aplicação permite executar as operações CRUD (Create, Read, Update e Delete), possibilitando cadastrar, consultar, atualizar e remover alunos.

Cada aluno possui os seguintes atributos:
- **nome:** Nome completo do aluno.
- **idade:** Idade do aluno.
- **matricula:** Número de matrícula único.
- **cursos:** Lista de cursos nos quais o aluno está matriculado.

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) – Framework Node.js para desenvolvimento de aplicações backend.
- [TypeScript](https://www.typescriptlang.org/) – Linguagem utilizada no desenvolvimento.
- [MongoDB](https://www.mongodb.com/) – Banco de dados NoSQL.
- [Mongoose](https://mongoosejs.com/) – ODM para integração com MongoDB.
- [class-validator](https://github.com/typestack/class-validator) – Validação dos dados recebidos pela API.

## 📂 Estrutura do Projeto

```text
src/
├── alunos/
│   ├── dto/
│   │   ├── create-aluno.dto.ts
│   │   └── update-aluno.dto.ts
│   ├── schemas/
│   │   └── aluno.schema.ts
│   ├── alunos.controller.ts
│   ├── alunos.service.ts
│   └── alunos.module.ts
│
├── app.module.ts
└── main.ts
```

## ⚙️ Funcionalidades

A API disponibiliza as seguintes funcionalidades:

- Cadastro de alunos.
- Listagem de todos os alunos.
- Consulta de um aluno específico pelo ID.
- Atualização dos dados de um aluno.
- Remoção de alunos.
- Validação dos dados recebidos.
- Verificação da existência do aluno antes de atualizar, consultar ou remover.
- Matrícula definida como campo único no banco de dados.

## 📋 Validações

O projeto utiliza a biblioteca `class-validator` para garantir a integridade dos dados.

As seguintes regras são aplicadas no cadastro:

| Campo | Regra |
|---|---|
| nome | Deve ser um texto e não pode estar vazio. |
| idade | Deve ser um número inteiro e não pode ser negativo. |
| matricula | Deve ser um texto obrigatório. |
| cursos | Deve ser uma lista de textos com pelo menos um curso. |

Também foi configurado um `ValidationPipe` global com:

- `whitelist: true` – Remove propriedades que não possuem decorators de validação.
- `forbidNonWhitelisted: true` – Rejeita propriedades não permitidas.
- `transform: true` – Permite a transformação dos dados recebidos.

## 🔗 Endpoints da API

A rota principal da aplicação é:

```text
http://localhost:3000/alunos
```

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/alunos` | Cadastrar um aluno. |
| GET | `/alunos` | Listar todos os alunos. |
| GET | `/alunos/:id` | Consultar um aluno pelo ID. |
| PATCH | `/alunos/:id` | Atualizar os dados de um aluno. |
| DELETE | `/alunos/:id` | Remover um aluno. |

## 📥 Exemplos de Requisições

### 1. Cadastrar aluno

**POST** `/alunos`

Corpo da requisição (JSON):

```json
{
  "nome": "João Silva",
  "idade": 20,
  "matricula": "2026001",
  "cursos": [
    "Desenvolvimento Web",
    "Banco de Dados",
    "Programação"
  ]
}
```

### 2. Listar todos os alunos

**GET** `/alunos`

Retorna a lista de alunos cadastrados no banco de dados.

### 3. Consultar aluno por ID

**GET** `/alunos/ID_DO_ALUNO`

Retorna os dados de um aluno específico.

### 4. Atualizar aluno

**PATCH** `/alunos/ID_DO_ALUNO`

Exemplo de corpo da requisição:

```json
{
  "idade": 21,
  "cursos": [
    "Desenvolvimento Web",
    "Engenharia de Software"
  ]
}
```

### 5. Remover aluno

**DELETE** `/alunos/ID_DO_ALUNO`

Remove o aluno correspondente ao ID informado.

## 🛠️ Como Executar o Projeto

### Pré-requisitos

Antes de executar a aplicação, é necessário ter instalado:

- Node.js
- npm
- MongoDB

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entrar na pasta do projeto

```bash
cd NOME_DO_PROJETO
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o MongoDB

Certifique-se de que o MongoDB esteja em execução na máquina.

A aplicação utiliza a seguinte conexão:

```text
mongodb://localhost:27017/escola_dbn
```

### 5. Executar a aplicação

Em ambiente de desenvolvimento:

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:3000
```

## 🧪 Testando a API

As rotas podem ser testadas utilizando ferramentas como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

Basta selecionar o método HTTP desejado, informar a URL e, quando necessário, enviar os dados no formato JSON.

## 📚 Conceitos Aplicados

Durante o desenvolvimento deste projeto foram utilizados conceitos importantes de desenvolvimento backend:

- Arquitetura modular do NestJS.
- Controllers e Services.
- DTOs (Data Transfer Objects).
- Decorators.
- Validação de dados.
- Integração com MongoDB através do Mongoose.
- Operações CRUD.
- Tratamento de exceções com `NotFoundException`.
- Organização e separação de responsabilidades.

## 👨‍💻 Autor
ARTHUR DA COSTA COSTA
Projeto desenvolvido para fins de estudo e prática de desenvolvimento backend com NestJS, TypeScript e MongoDB.