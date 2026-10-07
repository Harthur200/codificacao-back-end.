# 🚀 Aula 14 — Servidor Edge Runtime com Vercel

## 📚 Descrição

Nesta aula foi desenvolvido um servidor utilizando **Edge Runtime da Vercel**. A aplicação demonstra como criar uma função que é executada na borda da rede, retornando informações sobre a execução do servidor, como horário, região e tempo de execução.

O projeto utiliza uma função assíncrona que recebe uma requisição HTTP e retorna uma resposta no formato **JSON**.

---

## 🎯 Objetivo da Aula

O objetivo desta aula é compreender:

- O que é o **Edge Runtime**;
- Como criar uma função executada na borda da rede;
- Como utilizar `Request` e `Response`;
- Como retornar dados em formato JSON;
- Como calcular o tempo de execução de uma função;
- Como vincular um projeto local a um projeto da **Vercel**;
- A finalidade da pasta `.vercel`;
- Quais arquivos não devem ser enviados para o GitHub.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Vercel**
- **Edge Runtime**
- **JSON**
- **Git e GitHub**

---

## 📁 Estrutura do Projeto

```text
aula-14-servidor-edge-runtime-vercel/
│
├── api/
│   └── index.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

⚡ Edge Runtime

O projeto utiliza:

export const config = {
  runtime: 'edge',
};

Essa configuração informa que a função será executada utilizando o Edge Runtime, permitindo que a aplicação seja executada na infraestrutura de borda da Vercel.

Isso possibilita que as funções sejam executadas em regiões próximas aos usuários, ajudando a reduzir a latência em determinadas aplicações.

💻 Função Edge

A função recebe uma requisição HTTP através do objeto Request:

export default async function handler(req: Request) {

No início da execução é registrado o horário:

const inicio = new Date();

Depois, a função retorna uma resposta HTTP utilizando Response:

return new Response(
  JSON.stringify({
    mensagem: 'função executada na borda de rede',
    horarioDoServidor: new Date().toISOString(),
    regiao: 'local-dev',
    tempoDeExecucao: `${Date.now() - inicio.getTime()} ms`,
  }),

  📦 Resposta da API

A função retorna um objeto JSON contendo:

mensagem

Informa que a função foi executada na borda:

"mensagem": "função executada na borda de rede"
horarioDoServidor

Apresenta a data e hora em que a função foi executada:

"horarioDoServidor": "2026-10-06T00:00:00.000Z"
regiao

Indica a região utilizada durante o desenvolvimento:

"regiao": "local-dev"
tempoDeExecucao

Mostra aproximadamente quanto tempo a função levou para executar:

"tempoDeExecucao": "1 ms"

📌 Resultado Esperado

Ao acessar a função, a API deverá retornar uma resposta semelhante a:

{
  "mensagem": "função executada na borda de rede",
  "horarioDoServidor": "2026-10-06T00:00:00.000Z",
  "regiao": "local-dev",
  "tempoDeExecucao": "0 ms"
}

📚 Conceitos Aprendidos

Nesta aula foram trabalhados os seguintes conceitos:

Edge Runtime;
Funções serverless;
Vercel;
Requisições HTTP;
Respostas HTTP;
JSON;
Status HTTP;
Headers;
Medição do tempo de execução;
.gitignore;
Vinculação de projetos com a Vercel;
Boas práticas de segurança no Git.

👨‍💻 Projeto

Aula 14 — Servidor Edge Runtime com Vercel