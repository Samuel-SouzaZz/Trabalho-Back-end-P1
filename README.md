# Tagarela

Sistema de postagens de "fofocas" desenvolvido com Node.js, Express e TypeScript.

## 📋 Descrição

Tagarela é uma API RESTful que permite aos usuários:
- Criar e gerenciar perfis de usuários
- Publicar "fofocas" (posts) sobre outros usuários
- Visualizar todas as fofocas da plataforma
- Consultar usuários específicos

O projeto utiliza uma arquitetura em camadas com Models, Services e Controllers.

## 🛠️ Tecnologias

- **TypeScript**: Linguagem de programação
- **Express**: Framework web para Node.js
- **CORS**: Middleware para permitir requisições de diferentes origens

## 📁 Estrutura do Projeto

```
Tagarela/
├── controllers/            # Manipuladores de requisições
│   ├── postController.ts   # Controlador para posts/fofocas
│   └── userController.ts   # Controlador para usuários
│
├── models/                 # Definições de tipos/interfaces
│   ├── post.ts             # Interface para posts
│   └── user.ts             # Interface para usuários
│
├── services/               # Lógica de negócios
│   ├── postService.ts      # Serviço para posts
│   └── userService.ts      # Serviço para usuários
│
├── index.ts                # Ponto de entrada da aplicação
├── routes.ts               # Definição de rotas da API
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração do TypeScript
└── pendencias.txt          # Lista de funcionalidades pendentes
```

## 🚀 Endpoints Disponíveis

### Usuários
- **POST /user**: Cria um novo usuário
  - Body: `{ "name": "Nome do Usuário" }`
- **GET /user**: Lista todos os usuários cadastrados
- **GET /user/:id**: Busca usuário pelo ID

### Posts ("Fofocas")
- **POST /post**: Cria uma nova fofoca
  - Body: `{ "authorId": 1, "victimId": 2, "gossip": "Texto da fofoca" }`
- **GET /post**: Lista todas as fofocas cadastradas

## 💾 Persistência de Dados

Atualmente, os dados são armazenados em memória usando arrays. 
A aplicação não possui integração com banco de dados, reiniciar o servidor fará com que todos os dados sejam restaurados para o estado inicial.

### Dados iniciais:

#### Usuários
```
[
  { id: 1, name: "Nelsinho" },
  { id: 2, name: "Soninha" },
  { id: 3, name: "Leozin" }
]
```

#### Posts
```
[
  { id: 1, authorId: 1, victimId: 2, gossip: "Diz que é Flamenguista, mas acha que o Zico ainda é titular" },
  { id: 2, authorId: 2, victimId: 1, gossip: "Diz que é Botafoguense, mas não existem botafoguenses" },
  { id: 3, authorId: 3, victimId: 1, gossip: "Diz que é Tricolor, mas não existem tricolores com menos de 60 anos" }
]
```

## 🚧 Funcionalidades Pendentes

De acordo com o arquivo pendencias.txt, existem algumas funcionalidades a serem implementadas:

1. Exclusão de usuário (somente pode ser excluído caso não tenha posts relacionados)
2. Busca de todos os posts onde um usuário específico é a "vítima"
3. Ranking top 5 de usuários com maior número de autorias de posts

## ⚙️ Como executar

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Compile o TypeScript:
   ```
   npx tsc
   ```
4. Execute o servidor:
   ```
   node dist/index.js
   ```
5. O servidor estará disponível em: http://localhost:3000

## 🧪 Exemplos de Uso

### Criar um novo usuário
```bash
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"name": "Carlos"}'
```

### Criar uma nova fofoca
```bash
curl -X POST http://localhost:3000/post \
  -H "Content-Type: application/json" \
  -d '{"authorId": 1, "victimId": 3, "gossip": "Nova fofoca interessante sobre alguém"}'
```

## 📝 Observações

- A API não possui autenticação implementada
- As validações são simples, focadas apenas em verificar se usuários existem
- Há um bug conhecido na função `getUserById` que retorna usuários com IDs diferentes do solicitado 