# 🎓 Plataforma de Cursos EAD (LMS) - Fullstack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

Uma plataforma completa de ensino a distância (LMS) focada na experiência do aluno e gestão total pelo administrador. O sistema abrange desde a criação de conteúdo até o fluxo de negócios, proteção de rotas com JWT e interface responsiva.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React** com **Vite**
- **TypeScript**
- **Bootstrap 5 & Bootstrap Icons** (UI Components responsivos)
- **React Router Dom** (Navegação SPA)
- **Axios** (Integração com API)
- **Zod** (Validação de schemas e formulários)
- **React Toastify** (Notificações)

### Backend & Banco de Dados
- **NestJS** (Framework modular)
- **Prisma ORM** (Modelagem de dados)
- **PostgreSQL** (Banco de dados relacional robusto)
- **JWT (JSON Web Token) & Passport** (Autenticação e autorização)
- **Bcrypt** (Criptografia de senhas)
- **Swagger** (Documentação automática da API via `/api`)

### Infraestrutura
- **Docker & Docker Compose** (Ambiente isolado para DB, Frontend e Backend)
- **Nginx** (Proxy Reverso - opcional na arquitetura de produção)

---

## 🔒 Segurança e Autenticação (JWT)
O projeto implementa segurança avançada baseada em Tokens:
- Criptografia de senhas no banco de dados usando `bcrypt`.
- Geração e validação de tokens **JWT** em endpoints privados.
- Proteção de rotas do backend através de `JwtAuthGuard`.
- Controle de Acesso por Papéis (**RBAC**) utilizando `RolesGuard`, permitindo que apenas administradores acessem rotas de criação/edição e alunos acessem rotas de leitura/progresso.

---

## ⚙️ Funcionalidades Principais

- 🔐 **Gestão de Perfis:** Usuários divididos em **ADMIN**, **INSTRUTOR** e **ALUNO**.
- 📚 **Gestão de Conteúdo:** CRUD completo de Categorias, Trilhas, Cursos, Módulos e Aulas.
- 💳 **Planos e Assinaturas (Checkout):** Criação de planos vinculados a cursos específicos, simulador de pagamento e liberação condicional de acesso.
- 📊 **Progresso Dinâmico:** O aluno marca aulas concluídas e o sistema calcula seu progresso no curso.
- 🎓 **Certificados:** Geração de certificados únicos, com código de validação.
- ⭐ **Avaliações:** Sistema de nota (1-5 estrelas) e feedback sobre os cursos.

---

## 🛠️ Como rodar o projeto localmente

### 1. Pré-requisitos
Certifique-se de ter o **Git**, **Docker** e o **Docker Compose** instalados.

### 2. Configurando o ambiente
Clone o repositório:
```bash
git clone https://github.com/Guilheme-collab/plataforma-cursos-react-nest-jwt.git
cd plataforma-cursos-react-nest-jwt
```

Crie ou verifique o arquivo `.env` na pasta `backend` com a URL do banco (já configurada no repositório para o Docker):
```env
DATABASE_URL="postgresql://postgres:postgres123@db:5432/plataforma_cursos?schema=public"
JWT_SECRET="seu-segredo-super-seguro"
```

### 3. Subindo os Containers
Execute o comando na raiz do projeto:
```bash
docker compose up -d --build
```
O sistema iniciará automaticamente e rodará as _migrations/seeds_ do Prisma no banco de dados.

### 4. Acessos Locais
- **Frontend (Painel LMS):** http://localhost:5173
- **Documentação da API (Swagger):** http://localhost:3000/api
- **Prisma Studio (Visualização do BD):** http://localhost:5556

### 5. Usuário Padrão de Acesso (Admin)
O sistema conta com um seed de inicialização. Use as credenciais abaixo para entrar como administrador:
- **E-mail:** admin@plataforma.com
- **Senha:** admin123

---

## 📁 Estrutura do Projeto

```text
📦 plataforma-cursos-react-nest-jwt
 ┣ 📂 backend          # API NestJS
 ┃ ┣ 📂 prisma         # Schemas e Seeds do Banco de Dados
 ┃ ┣ 📂 src            
 ┃ ┃ ┣ 📂 auth         # Lógica de Login, JWT, Guards e Decorators
 ┃ ┃ ┣ 📂 [entidades]  # Controladores e Serviços (Cursos, Aulas, Usuarios...)
 ┃ ┃ ┗ 📜 main.ts      # Ponto de entrada do Nest
 ┣ 📂 frontend         # Aplicação React
 ┃ ┣ 📂 src            
 ┃ ┃ ┣ 📂 components   # Componentes globais (Layout, Navbar, etc)
 ┃ ┃ ┣ 📂 contexts     # AuthContext (Gerenciamento de sessão/JWT no React)
 ┃ ┃ ┣ 📂 models       # Interfaces e schemas Zod
 ┃ ┃ ┣ 📂 pages        # Telas da aplicação (Admin, Checkout, Catálogo)
 ┃ ┃ ┗ 📂 services     # Instância do Axios e chamadas de API
 ┣ 📜 docker-compose.yml
 ┗ 📜 README.md
```
