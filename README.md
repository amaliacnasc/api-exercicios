# Exercise Tracker API

Este projeto é uma API para rastrear exercícios e usuários, construída com Node.js, Express e MongoDB utilizando Mongoose. A API fornece autenticação de usuários, criação, edição e remoção de exercícios, além de várias rotas protegidas por autenticação JWT.

## Funcionalidades

- Registro e login de usuários
- CRUD completo para exercícios
- CRUD completo para usuários (somente para usuários autenticados)
- Autenticação JWT para proteger as rotas
- Middleware de segurança com Helmet
- Log de requisições HTTP com Morgan

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (JsonWebToken)
- Helmet (Segurança)
- Morgan (Logging)
- CORS (Cross-Origin Resource Sharing)
- Dotenv (Configuração de variáveis de ambiente)

# Rotas da API

## Autenticação
- POST /api/auth/register: Registra um novo usuário
- POST /api/auth/login: Faz login de um usuário

## Usuários
- GET /api/users: Obtém todos os usuários (requer autenticação)
- GET /api/users/:id: Obtém um usuário por ID (requer autenticação)
- PUT /api/users/:id: Atualiza um usuário por ID (requer autenticação)
- DELETE /api/users/:id: Deleta um usuário por ID (requer autenticação)

## Exercícios
- GET /api/exercises: Obtém todos os exercícios
- GET /api/exercises/:id: Obtém um exercício por ID (requer autenticação)
- GET /api/exercises/user/:id: Obtém exercícios de um usuário (requer autenticação)
- POST /api/exercises: Cria um novo exercício (requer autenticação)
- PUT /api/exercises/:id: Atualiza um exercício por ID (requer autenticação)
- DELETE /api/exercises/:id: Deleta um exercício por ID (requer autenticação)
