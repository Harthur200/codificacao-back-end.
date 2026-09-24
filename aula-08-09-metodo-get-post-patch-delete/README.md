## 📚 Aula 08 e 09 — Métodos GET, POST, PATCH e DELETE

## 📌 Descrição

Projeto desenvolvido durante as aulas de Codificação para Back-End, utilizando NestJS para construir uma API RESTful de gerenciamento de convidados.

Nesta atividade foram implementadas as principais operações do CRUD: GET, POST, PATCH e DELETE, utilizando Controllers, Services, DTO, parâmetros de rota, corpo da requisição e códigos de status HTTP.

## 🎯 Objetivos
Criar rotas utilizando métodos HTTP.
Listar convidados com GET.
Cadastrar convidados com POST.
Atualizar a idade de convidados com PATCH.
Remover convidados com DELETE.
Utilizar parâmetros dinâmicos com @Param().
Receber dados através de @Body().
Utilizar @HttpCode(204) para exclusões.
Separar responsabilidades entre Controller e Service.
Utilizar NotFoundException para tratar convidados inexistentes.

## 🛠️ Tecnologias utilizadas
Node.js
TypeScript
NestJS
REST API
Insomnia
HTTP

## 📁 Estrutura do projeto
aula-08-09-metodo-get-post-patch-delete/
│
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── convidados.controller.ts
│   ├── convidados.service.ts
│   ├── criar-convidado.dto.ts
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

O AppModule é responsável por registrar os Controllers e Services utilizados pela aplicação.

@Module({
  imports: [],
  controllers: [
    AppController,
    ConvidadosController,
  ],
  providers: [
    AppService,
    ConvidadosService,
  ],
})
export class AppModule {}

O ConvidadosController recebe as requisições HTTP, enquanto o ConvidadosService concentra a manipulação dos dados.

## 🚦 AppController

O AppController possui uma rota para verificar o status do servidor:

@Controller('status')
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}

A rota utilizada é:

GET /status

## ⚙️ AppService

O AppService retorna uma mensagem informando que o servidor está ativo:

@Injectable()
export class AppService {

  getHello(): string {
    return 'Status: Servidor Ativo!';
  }

}

Ao acessar:

GET http://localhost:3000/status

a resposta será:

Status: Servidor Ativo!

## 👥 Convidados

O sistema utiliza uma lista em memória para armazenar os convidados:

private convidados = [
  { id: 1, nome: 'Rebeca', idade: 23 },
  { id: 2, nome: 'Liam', idade: 25 },
  { id: 3, nome: 'Cauê', idade: 20 },
  { id: 4, nome: 'Emanuelly', idade: 21 },
  { id: 5, nome: 'Jamily', idade: 20 },
  { id: 6, nome: 'Vitória', idade: 22 },
];

## 📋 GET — Listar convidados

A rota:

@Get()
listarConvidados() {
  return this.convidados;
}

permite consultar todos os convidados.

## ➕ POST — Criar convidado

Para cadastrar um novo convidado, é utilizado:

@Post()
criarConvidado(@Body() criarConvidado: CriarConvidadoDto)

O método recebe os dados enviados no corpo da requisição.

## 🔄 PATCH — Atualizar idade

A rota PATCH permite alterar a idade de um convidado específico:

@Patch(':id')
atualizarIdade(
  @Param('id') id: string,
  @Body('idade') idade: number,
)

O :id identifica qual convidado será alterado.

## 🗑️ DELETE — Remover convidado

Para remover um convidado:

@Delete(':id')
@HttpCode(204)
removerConvidado(@Param('id') id: string)

## 🔎 Busca por ID

O ConvidadosService possui o método:

buscarPorId(id: number) {
  const convidado = this.convidados.find(
    (convidado) => convidado.id === id,
  );

  if (!convidado) {
    throw new NotFoundException(
      `Convidado com ID ${id} não encontrado`,
    );
  }

  return convidado;
}

Esse método utiliza .find() para localizar um convidado pelo ID.

Caso o ID não exista, é lançada uma exceção:

NotFoundException

## 🧱 DTO — CriarConvidadoDto

O DTO define os dados esperados para cadastrar um convidado:

export class CriarConvidadoDto {
  nome: string;
  idade: number;
}

## 📚 Conceitos aprendidos

Durante as aulas foram trabalhados:

Controllers
Services
DTO
Injeção de dependência
Métodos HTTP
GET
POST
PATCH
DELETE
@Body()
@Param()
Rotas com :id
@HttpCode(204)
NotFoundException
CRUD
API RESTful
Testes utilizando Insomnia

## 👨‍💻 Autor

**Arthur da Costa**