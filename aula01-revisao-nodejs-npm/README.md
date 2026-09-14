## 📌 Aula 01 — Revisão do Node.js e NPM

Nesta primeira aula foram revisados conceitos fundamentais do **Node.js** e do **NPM**, além da criação de um script para realizar um diagnóstico das informações do sistema.

Foi utilizado o módulo nativo **`os`** do Node.js para obter informações sobre o sistema operacional, memória RAM e processador.

### 🔎 Diagnóstico do servidor

O script apresenta as seguintes informações:

* Arquitetura do sistema operacional;
* Memória RAM total;
* Memória RAM livre;
* Quantidade de cores do processador;
* Modelo do processador;
* Velocidade do processador em MHz.

### 💻 Módulo `os`

O módulo nativo `os` foi utilizado por meio dos seguintes métodos:

```javascript
const os = require('os');

os.platform();
os.totalmem();
os.freemem();
os.cpus();
```

O método `os.platform()` identifica a plataforma do sistema operacional.

Os métodos `os.totalmem()` e `os.freemem()` permitem consultar a quantidade de memória RAM total e disponível.

Já `os.cpus()` retorna informações sobre os processadores disponíveis no computador, permitindo identificar a quantidade de núcleos, modelo e velocidade.

### 📋 Exemplo de saída

```text
=== DIAGNÓSTICO DO SERVIDOR ===

Arquitetura OS: win32
Memória RAM Total: XX.XX GB
Memória RAM Livre: XX.XX GB
Cores do Processador: X
Processador: Nome do processador
Velocidade do Processador: XXXX MHz
```

## 📁 Organização

O repositório será organizado de acordo com as atividades e aulas realizadas durante a disciplina.

```text
codificacao-back-end/
├── README.md
├── aula-01/
│   ├── index.js
│   └── package.json
├── aula-02/
├── aula-03/
└── ...
```

## 👨‍💻 Autor

**Arthur da Costa Costa**
