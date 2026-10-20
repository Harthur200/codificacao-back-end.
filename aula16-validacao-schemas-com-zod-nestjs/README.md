# Cadastro de Colaboradores — NestJS

Repositório destinado ao desenvolvimento de uma API REST para cadastro de colaboradores, utilizando **NestJS**, **TypeScript** e **Zod** para validação dos dados recebidos nas requisições HTTP.

## ✒️ Objetivo

Desenvolver conhecimentos e habilidades relacionados à construção de aplicações Back-End, trabalhando conceitos de APIs REST, controladores, módulos, requisições HTTP, validação de dados com schemas, tratamento de erros e organização de aplicações utilizando NestJS.

## 🚀 Tecnologias

- **Node.js** — Ambiente de execução JavaScript no Back-End.
- **NestJS** — Framework para construção de aplicações Back-End.
- **TypeScript** — Linguagem utilizada no desenvolvimento da aplicação.
- **Zod** — Biblioteca utilizada para validação e definição de schemas.
- **NPM** — Gerenciador de pacotes e dependências.
- **Git** — Sistema de controle de versão.
- **GitHub** — Plataforma utilizada para hospedagem e versionamento remoto do projeto.

## 🛠️ Ferramentas utilizadas

- Visual Studio Code
- Node.js
- NPM
- NestJS CLI
- Git
- GitHub
- Terminal

## 📚 Funcionalidades

A API permite realizar o cadastro de colaboradores com validação dos dados enviados.

- Cadastro de colaboradores por meio de requisições HTTP POST;
- Validação do nome, exigindo entre 3 e 50 caracteres;
- Validação do formato do e-mail;
- Validação da idade, permitindo valores entre 18 e 65 anos;
- Validação do departamento do colaborador;
- Tratamento de erros de validação com respostas HTTP 400;
- Exibição de mensagens específicas para cada campo inválido;
- Utilização de um Pipe personalizado para integração do Zod com o NestJS.

### Departamentos permitidos

Os colaboradores devem pertencer a um dos seguintes departamentos:

- TI
- RH
- Comercial
- Financeiro

## 🔗 Endpoint

| Método HTTP | Rota | Descrição |
|---|---|---|
| POST | `/colaboradores` | Cadastra um novo colaborador |

### Exemplo de requisição

```http
POST http://localhost:3000/colaboradores
Content-Type: application/json
```

**Corpo da requisição:**

```json
{
  "nome": "Arthur da Costa",
  "email": "arthur@email.com",
  "idade": 25,
  "departamento": "TI"
}
```

### Exemplo de resposta

```json
{
  "mensagem": "Colaborador cadastrado com sucesso",
  "dados": {
    "nome": "Arthur da Costa",
    "email": "arthur@email.com",
    "idade": 25,
    "departamento": "TI"
  }
}
```

## ⚠️ Validação de dados

A validação é realizada por meio do schema `colaboradorSchema`, definido com a biblioteca Zod.

| Campo | Regra |
|---|---|
| `nome` | Deve conter entre 3 e 50 caracteres |
| `email` | Deve possuir um formato de e-mail válido |
| `idade` | Deve ser um número entre 18 e 65 |
| `departamento` | Deve ser TI, RH, Comercial ou Financeiro |

Caso algum campo não atenda às regras definidas, a API retorna um erro HTTP `400 Bad Request`, contendo informações sobre os campos inválidos e suas respectivas mensagens.

## 📁 Organização

O projeto está organizado em módulos, controladores, schemas e pipes de validação.

```text
cadastro-colaboradores/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   ├── main.ts
│   ├── colaboradores.controller.ts
│   ├── colaborador.schema.ts
│   └── zod-validation.pipe.ts
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

### 2. Instalar o Zod

Caso a biblioteca ainda não esteja instalada:

```bash
npm install zod
```

### 3. Iniciar a aplicação

```bash
npm run start:dev
```

Por padrão, a aplicação estará disponível em:

`http://localhost:3000`

### 4. Testar a API

Utilize ferramentas como Postman, Insomnia ou Thunder Client para enviar uma requisição POST para `/colaboradores`, incluindo os dados do colaborador no formato JSON.

## 📝 Observações

- Nesta versão, o cadastro retorna os dados validados, mas não os armazena em um banco de dados.
- O `ZodValidationPipe` utiliza o método `safeParse()` para validar os dados recebidos.
- As mensagens de erro são personalizadas para facilitar a identificação de informações inválidas.
- O projeto utiliza TypeScript para garantir maior organização e tipagem dos dados.

## 👨‍💻 Autor

**Arthur da Costa Costa**
