# Desafio Node.js – Primeira API (aulas)

API simples em Node.js + TypeScript usando Fastify.

## Requisitos

- Node.js 22+
- npm (ou outro gerenciador, mas o projeto usa `package-lock.json`)

## Tecnologias

- TypeScript

## Configuração

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

## Executando o servidor

```bash
npm run dev
```

- Porta padrão: `http://localhost:3333`

## Endpoints

Base URL: `http://localhost:3333`

- POST `/courses`

  - Cria um curso
  - Body (JSON):
    ```json
    { "title": "Curso de Exemplo 1" }
    ```
  - Respostas:
    - 201: `{ "courseId": "<uuid>" }`

- GET `/courses`

  - Lista todos os cursos
  - 200: `{ "courses": [{ "id": "<uuid>", "title": "..." }] }`

- GET `/courses/:id`
  - Busca um curso pelo ID
  - Parâmetros: `id` (UUID)
  - Respostas:
    - 200: `{ "course": { "id": "<uuid>", "title": "...", "description": "... | null" } }`
    - 404: vazio

Há um arquivo `requisicoes.http` com exemplos prontos (compatível com extensões de REST Client).

## Modelos (schema)

Tabelas principais definidas em `src/database/schema.ts`:

- `courses`
  - `id`
  - `title`
  - `description`
- `users`
  - `id`
  - `name`
  - `email`

## Scripts

- `npm run dev`: inicia o servidor com reload e carrega variáveis de `.env`
