## 📚 Aula 10 — Rotas Dinâmicas no NestJS
## 📌 Descrição

Nesta aula foi desenvolvido um exemplo de rotas dinâmicas no NestJS, utilizando parâmetros de URL para localizar jogos específicos. O projeto utiliza um JogosController para receber o ID informado na rota e um JogosService para realizar a busca dos dados.

## 🎯 Objetivo da Aula

O objetivo é aprender a trabalhar com rotas dinâmicas, permitindo que uma mesma rota receba diferentes IDs.

Exemplo:

GET /jogos/1
GET /jogos/2
GET /jogos/3

Cada requisição utiliza um ID diferente para localizar um jogo específico.

## 📁 Estrutura do Projeto
aula-10-rotas-dinamicas/
│
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── jogos.controller.ts
│   ├── jogos.service.ts
│   └── main.ts
│
├── test/
├── .gitignore
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

## 🧩 AppModule

O AppModule é responsável por registrar os controllers e services utilizados pela aplicação.

@Module({
  imports: [],
  controllers: [AppController, JogosController],
  providers: [AppService, JogosService],
})
export class AppModule {}

O JogosController e o JogosService são registrados no módulo para que o NestJS possa utilizá-los.

## ⚙️ AppService

O AppService possui uma função simples para verificar o status do servidor:

@Injectable()
export class AppService {
  getHello(): string {
    return 'Status Servidor: Ativo';
  }
}

A mensagem retornada é:

Status Servidor: Ativo

## 🎮 JogosController

O controller possui uma rota dinâmica:

@Controller('jogos')
export class JogosController {

  constructor(
    private readonly jogosService: JogosService
  ) {}

  @Get(':id')
  buscarPorId(
    @Param('id', ParseIntPipe) id: string
  ) {
    const numId = +id;

    return this.jogosService.buscarPorId(numId);
  }
}
🔹 @Controller('jogos')

Define o prefixo da rota:

/jogos
🔹 @Get(':id')

O :id representa um parâmetro dinâmico.

## 🔢 ParseIntPipe

O código utiliza:

@Param('id', ParseIntPipe) id: string

O ParseIntPipe é utilizado para trabalhar com o parâmetro id como número.

Depois, o código também realiza:

const numId = +id;

para converter o valor para número antes de enviá-lo ao Service.

## 🎮 JogosService

O JogosService mantém uma lista de jogos:

private jogos = [
  {
    id: 1,
    titulo: 'minecraft',
    estudio: 'Mojang Studios'
  },
  {
    id: 2,
    titulo: 'The Legend of Zelda: Ocarina of time',
    estudio: 'Nintendo'
  },
  {
    id: 3,
    titulo: 'Grand theft Auto V',
    estudio: 'Rockstar North'
  },
  {
    id: 4,
    titulo: 'Elden Ring',
    estudio: 'Fromsoftware'
  },
  {
    id: 5,
    titulo: 'God of war',
    estudio: 'Santa monica Studios'
  }

 ## 🔍 Buscando um jogo pelo ID

O método:

buscarPorId(id: number) {
  const jogo = this.jogos.find(
    (j) => j.id === id
  );

  if (!jogo) {
    throw new NotFoundException(
      `Jogo com ID ${id} não localizado em nosso estoque.`
    );
  }

  return jogo;
}

utiliza o .find() para procurar um jogo cujo id seja igual ao ID recebido.

## 🛠️ Tecnologias utilizadas
Node.js
TypeScript
NestJS
REST API
Insomnia
Decorators do NestJS
@Controller
@Get
@Param
ParseIntPipe
NotFoundException
Injeção de dependência

## 📚 Conceitos aprendidos

Nesta aula foram trabalhados principalmente:

Rotas dinâmicas
Parâmetros de rota com :id
@Param()
ParseIntPipe
Injeção de dependência
Separação entre Controller e Service
Busca de dados com .find()
Tratamento de recurso inexistente com NotFoundException
Respostas HTTP para recursos encontrados ou não encontrados

## 🚀 Conclusão

A Aula 10 apresenta o uso de rotas dinâmicas no NestJS, permitindo que uma única rota seja utilizada para consultar diferentes jogos através do ID informado na URL.

O JogosController recebe a requisição e o parâmetro dinâmico, enquanto o JogosService realiza a busca e trata o caso em que o jogo não é encontrado.

## 👨‍💻 Autor

**Arthur da Costa**
