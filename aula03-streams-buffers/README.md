# Aula 03 - Streams e Buffers com Node.js

## 📚 Sobre a aula

Nesta aula foi estudado o conceito de **Streams (fluxos de dados)** e **Buffers** no Node.js.

O objetivo da atividade é trabalhar com arquivos de log de grande volume, utilizando Streams para escrever e ler os dados de forma mais eficiente, sem precisar carregar todo o conteúdo do arquivo na memória de uma única vez.

Foi desenvolvido um exemplo que:

- Gera um arquivo de log com 400.000 linhas;
- Utiliza `WriteStream` para escrever os dados;
- Identifica registros do tipo `ERROR`;
- Utiliza `ReadStream` para realizar a leitura do arquivo;
- Utiliza o módulo `readline` para processar o arquivo linha por linha;
- Cria um novo arquivo contendo somente os erros encontrados;
- Conta a quantidade de erros;
- Exibe o consumo de memória durante o processamento.

---

## 🎯 Objetivos

Os principais objetivos desta aula são:

- Entender o funcionamento de Streams no Node.js;
- Trabalhar com arquivos grandes;
- Utilizar `fs.createWriteStream()`;
- Utilizar `fs.createReadStream()`;
- Utilizar o módulo `readline`;
- Processar arquivos linha por linha;
- Trabalhar com programação assíncrona utilizando `async/await`;
- Utilizar `for await...of`;
- Verificar o consumo de memória da aplicação;
- Entender a importância das Streams no processamento de grandes quantidades de dados.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript
- ECMAScript Modules (ESM)
- Módulo `fs`
- Módulo `readline`
- Streams
- Buffers
- `async/await`

---

## 📁 Estrutura do projeto

```text
aula03-streams-buffers/
│
├── gerarLogGigante.js
├── processarLogs.js
├── package.json
├── servidor.log
└── apenas_erros.log