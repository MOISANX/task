
# Sistema de Tarefas (Tasks System)

Este é um sistema simples para gerenciar tarefas (tasks) utilizando Node.js, Express.js e Prisma.

## Funcionalidades Principais

- Listar todas as tarefas
- Criar uma nova tarefa
- Atualizar uma tarefa existente
- Marcar uma tarefa como completa/incompleta
- Excluir uma tarefa

## Pré-Requisitos

- Node.js
- npm (ou yarn)
- Banco de dados configurado com Prisma

## Instalação

1. Clone este repositório: `git clone https://github.com/seu-usuario/meu-projeto.git`
2. Entre no diretório do projeto: `cd meu-projeto`
3. Instale as dependências: `npm install` ou `yarn install`

## Como Executar

1. Inicie o servidor: `npm start` ou `yarn start`
2. Acesse o sistema via browser ou cliente HTTP, usando os endpoints disponíveis.

## Endpoints Disponíveis

- `POST /tasks/create`: Criar uma nova tarefa
- `GET /tasks/list`: Listar todas as tarefas
- `DELETE /tasks/delete/:id`: Excluir uma tarefa pelo ID
- `PUT /tasks/update/:id`: Atualizar uma tarefa pelo ID
- `PATCH /tasks/updatecomplete/:id`: Marcar uma tarefa como completa/incompleta pelo ID

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias no projeto.


