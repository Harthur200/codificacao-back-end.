📸 Aula 11 — API de Upload de Imagem com NestJS
📌 Descrição

Neste projeto foi desenvolvida uma API utilizando NestJS para realizar o upload de imagens. A aplicação recebe arquivos enviados através de requisições HTTP utilizando multipart/form-data, realiza validações de tipo e tamanho, gera um nome único para o arquivo e armazena a imagem na pasta uploads.

O projeto também utiliza o Multer, integrado ao NestJS através do FileInterceptor, para receber e processar os arquivos enviados.

🎯 Objetivos da Aula
Aprender a realizar upload de arquivos com NestJS.
Utilizar FileInterceptor para receber arquivos.
Trabalhar com requisições multipart/form-data.
Validar o tipo do arquivo enviado.
Limitar o tamanho máximo do arquivo.
Gerar nomes únicos para os arquivos.
Armazenar imagens no servidor.
Testar uma API de upload utilizando o Insomnia.
🛠️ Tecnologias Utilizadas
Node.js
NestJS
TypeScript
Multer
Express
UUID
Insomnia
📂 Estrutura do Projeto
aula11-api-upload-image/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── imagem.controller.ts
│   ├── imagem.module.ts
│   └── main.ts
│
├── uploads/
│   └── imagens enviadas
│
├── package.json
├── package-lock.json
└── tsconfig.json

📸 Upload de Imagens

O upload é realizado através da rota:

POST http://localhost:3000/imagem/upload

O controller utiliza:

@Controller('imagem')

e:

@Post('upload')

Por isso, a rota final fica:

/imagem/upload

📋 Configuração do Upload

O projeto utiliza o FileInterceptor:

@UseInterceptors(
  FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const nomeArquivo = `${uuidv4()}${extname(file.originalname)}`;
        callback(null, nomeArquivo);
      },
    }),
  }),
)
📁 Local de armazenamento

As imagens recebidas são armazenadas em:

uploads/
🔐 Nome único

O projeto utiliza UUID para gerar um nome único para cada arquivo:

const nomeArquivo = `${uuidv4()}${extname(file.originalname)}`;

Dessa forma, arquivos com o mesmo nome original não precisam substituir uns aos outros.

📏 Limite de tamanho

Foi configurado um limite máximo de:

limits: {
  fileSize: 2 * 1024 * 1024,
}

Isso corresponde a aproximadamente 2 MB por arquivo.

🖼️ Tipos de imagens permitidos

O projeto aceita os seguintes formatos:

.jpg
.jpeg
.png
.gif
.webp

A validação é realizada através do fileFilter:

if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
  return callback(
    new BadRequestException(
      'Apenas arquivos jpg, jpeg, png, gif e webp são suportados!',
    ),
    false,
  );
}

Arquivos de outros formatos, como .tiff, são rejeitados pela API.

✅ Resposta de sucesso

Quando o upload é realizado corretamente, a API retorna informações sobre o arquivo enviado:

{
  "filename": "8f7b9c2e-xxxx-xxxx-xxxx-xxxxxxxxxxxx.jpg",
  "size": 123456,
  "url": "http://localhost:3000/api/uploads/8f7b9c2e-xxxx-xxxx-xxxx-xxxxxxxxxxxx.jpg"
}
📌 Informações retornadas
filename → nome gerado para o arquivo.
size → tamanho do arquivo em bytes.
url → endereço para acessar a imagem.

👨‍💻 Autor

Arthur da Costa