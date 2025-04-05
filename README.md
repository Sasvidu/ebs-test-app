# NestJS Todo API

A simple Todo API built with NestJS, Prisma, and PostgreSQL.

## Features

- CRUD operations for todos
- PostgreSQL database with Prisma ORM
- Swagger API documentation
- Input validation
- Environment configuration

## Prerequisites

- Node.js
- pnpm
- PostgreSQL

## Project setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```
Then update the `.env` file with your PostgreSQL credentials.

3. Run Prisma migrations:
```bash
pnpm prisma migrate dev
```

## Running the app

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:
http://localhost:3000/api

## Available Endpoints

- `GET /todos` - Get all todos
- `GET /todos/:id` - Get a specific todo
- `POST /todos` - Create a new todo
- `PATCH /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo
