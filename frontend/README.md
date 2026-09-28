# CRUD React - Trilhas

Aplicação CRUD completa para gerenciamento de **Trilhas** usando React + TypeScript + Vite.

## Tecnologias

- React 19
- TypeScript
- Vite
- Bootstrap 5
- Zod (validação)
- JSON Server (API fake)
- React Router DOM

## Como Rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor (JSON Server)
```bash
npm run server
```
> Roda na porta 4000: `http://localhost:4000/trilhas`

### 3. Iniciar o frontend (Vite)
```bash
npm run dev
```

## Estrutura

```
src/
├── components/       # Componentes reutilizáveis (Button, Card, Input, Nav)
├── models/           # Interface e schema Zod (trilha.model.ts)
├── pages/            # Páginas (Home, Sobre, Trilhas)
├── routers/          # Rotas da aplicação
└── services/         # Serviço de API (trilha.service.ts)
```

## Campos da Trilha

| Campo         | Tipo   | Descrição                  |
|---------------|--------|----------------------------|
| id            | string | Identificador único        |
| nome          | string | Nome da trilha             |
| descricao     | string | Descrição da trilha        |
| cargaHoraria  | string | Carga horária (em horas)   |
| status        | enum   | "ativo" ou "inativo"       |
