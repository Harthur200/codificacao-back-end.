## 📚 Aula 02 — Módulos ES (ESM) e Sistema de Logs com Node.js

Projeto desenvolvido durante os estudos de Back-End com Node.js, com foco na utilização de Módulos ES (ESM), manipulação de arquivos de forma assíncrona e criação de um sistema simples para registro de logs.

## 📌 Sobre o Projeto

Nesta aula foi desenvolvido um sistema simples de registro de logs do sistema, utilizando recursos nativos do Node.js.

O projeto recebe mensagens, adiciona automaticamente data e horário, cria a pasta de logs caso ela não exista e salva as informações em um arquivo chamado syslog.log.

O objetivo principal é praticar:

Módulos ES (import e export);
fs/promises;
Manipulação de caminhos com path;
Utilização de fileURLToPath;
Funções assíncronas com async/await;
Criação de diretórios;
Escrita e atualização de arquivos;
Organização do código em módulos;
Tratamento de erros com try/catch.
## 🛠️ Tecnologias Utilizadas
Node.js
JavaScript
ECMAScript Modules (ESM)
File System (fs/promises)
Path
URL
NPM
## 📂 Estrutura do Projeto
aula02-modulos-commonjs-esm/
│
├── Logs/
│   └── syslog.log
│
├── index.js
│
├── utilitario.js
│
├── package.json
│
└── README.md
## 📄 index.js

Responsável por:

Importar os módulos necessários;
Criar o caminho absoluto do projeto;
Criar a pasta Logs;
Criar ou atualizar o arquivo syslog.log;
Registrar as mensagens;
Tratar possíveis erros.
## 📄 utilitario.js

Contém a função formatLog(), responsável por adicionar a data e o horário atual à mensagem antes que ela seja armazenada.

## 📄 package.json

O projeto utiliza:

"type": "module"

Essa configuração permite utilizar a sintaxe moderna de módulos ES:

import ...
export ...
## 📦 Principais Módulos Utilizados
fs/promises

Utilizado para trabalhar com arquivos e diretórios de maneira assíncrona.

import fs from 'fs/promises';

No projeto são utilizados:

await fs.mkdir();

para criar a pasta de logs, e:

await fs.appendFile();

para adicionar novos registros ao arquivo de log.

path

Utilizado para construir caminhos de arquivos e diretórios de maneira segura.

import path from 'path';

Exemplo:

const pastaLog = path.join(__dirname, 'Logs');
fileURLToPath

Como o projeto utiliza ESM, o __dirname não está disponível diretamente.

Por isso, é utilizado:

import { fileURLToPath } from 'url';

Para obter o caminho do arquivo atual:

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
## 📝 Formatação dos Logs

A função formatLog() cria automaticamente um registro contendo:

Data;
Horário;
Mensagem.

Exemplo:

[2026-09-14 - 20:40:15]: Inicialização do servidor

Outro exemplo:

[2026-09-14 - 20:40:15]: Conexão com o banco de dados estabelecida
## 💾 Funcionamento do Sistema

Quando a função salvarlogSistema() é executada, o sistema realiza as seguintes etapas:

1️⃣ Criação do caminho da pasta
const pastaLog = path.join(__dirname, 'Logs');
2️⃣ Definição do arquivo
const arquivoLog = path.join(pastaLog, 'syslog.log');
3️⃣ Criação da pasta
await fs.mkdir(pastaLog, { recursive: true });

O recursive: true permite que a pasta seja criada mesmo que os diretórios necessários ainda não existam.

4️⃣ Formatação da mensagem
const registro = formatLog(mensagemLog);
5️⃣ Gravação no arquivo
await fs.appendFile(arquivoLog, registro, 'utf-8');

O appendFile() adiciona o novo registro ao final do arquivo sem apagar os registros anteriores.

▶️ Como Executar o Projeto
1. Clone o repositório
git clone URL_DO_SEU_REPOSITORIO
2. Entre na pasta do projeto
cd aula02-modulos-commonjs-esm
3. Instale as dependências

Como o projeto utiliza apenas módulos nativos do Node.js, não existem dependências externas obrigatórias.

Mesmo assim, você pode executar:

npm install
4. Execute o projeto
node index.js
## 🖥️ Resultado Esperado

Ao executar o projeto, será exibida uma mensagem semelhante a:

Log Registarado com sucesso...
Log Registarado com sucesso...

A pasta Logs será criada automaticamente:

Logs/
└── syslog.log

E o arquivo poderá conter registros semelhantes a:

[2026-09-14 - 20:40:15]: Inicialização do servidor

[2026-09-14 - 20:40:15]: Conexão com o banco de dados estabelecida
## ⚠️ Tratamento de Erros

O sistema utiliza try/catch para evitar que erros durante a criação da pasta ou gravação do arquivo encerrem a aplicação sem uma mensagem explicativa.

try {
    // operações de arquivo
} catch (erro) {
    console.error('Erro ao registrar log: ', erro);
}
## 🎯 Objetivos da Aula

Ao finalizar esta atividade, os principais conceitos praticados foram:

Utilização de import e export;

Configuração do projeto como ESM;

Utilização de fs/promises;

Manipulação de arquivos com Node.js;

Criação de diretórios;

Utilização de path;

Utilização de fileURLToPath;

Funções assíncronas;

async/await;

Tratamento de erros;

Organização do código em módulos;

Criação de um sistema básico de logs.

## 📚 Conceitos Aprendidos
CommonJS x ESM

O Node.js possui diferentes formas de trabalhar com módulos.

CommonJS
const fs = require('fs');
ES Modules
import fs from 'fs/promises';

Neste projeto foi utilizado ESM, habilitado através do package.json:

"type": "module"
## 👨‍💻 Autor

Arthur da Costa

Projeto desenvolvido para fins acadêmicos e de aprendizado durante os estudos de Desenvolvimento Back-End com Node.js.