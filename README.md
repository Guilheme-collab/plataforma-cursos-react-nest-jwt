# 🎓 Plataforma de Cursos EAD (LMS) - Fullstack

Uma plataforma completa de ensino a distância (LMS) desenvolvida com **React** e **NestJS**. O sistema abrange desde a criação de conteúdo (cursos, módulos e videoaulas) até o fluxo de negócios, como planos de assinatura, matrículas automáticas, controle de progresso e emissão de certificados.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React** (Vite)
- **TypeScript**
- **Bootstrap 5** (Design Responsivo e UI Components)
- **Zod** (Validação de schemas e formulários)
- **React Router Dom** (Navegação SPA)

### Backend
- **NestJS** (Framework Node.js modular)
- **TypeScript**
- **Prisma ORM** (Modelagem e manipulação de dados)
- **PostgreSQL** (Banco de Dados Relacional)
- **Swagger** (Documentação da API via /api)

### Infraestrutura
- **Docker & Docker Compose** (Containerização dos serviços: Frontend, Backend e Banco de Dados)

---

## ⚙️ Funcionalidades Principais

- 🔐 **Controle de Acesso por Perfis (RBAC):** Usuários divididos entre **Admin**, **Instrutor** e **Aluno**.
- 📚 **Gestão de Conteúdo Educacional:** CRUD completo de Categorias, Trilhas, Cursos, Módulos e Aulas.
- 💳 **Planos e Assinaturas (Checkout):** O administrador cria planos vinculando cursos específicos. O aluno realiza a simulação de checkout e a matrícula é gerada automaticamente.
- 📊 **Progresso de Aulas:** Alunos podem marcar aulas como concluídas, e o sistema salva o progresso na base de dados.
- 🎓 **Certificados:** Geração de certificados com código de verificação único e relacionamento direto com o aluno e o curso/trilha.
- ⭐ **Avaliações:** Sistema de 1 a 5 estrelas com comentários para os cursos matriculados.

---

## 🛠️ Como rodar o projeto localmente

### 1. Pré-requisitos
Certifique-se de ter o **Docker** e o **Docker Compose** instalados em sua máquina.

### 2. Subindo a infraestrutura
Clone este repositório e, na pasta raiz do projeto, execute:
\\\ash
docker compose up -d --build
\\\
Este comando irá iniciar 3 containers:
- **db:** Banco de Dados PostgreSQL (rodando na porta 5432 interna / 5556 exposta)
- **backend:** API NestJS (rodando na porta 3000)
- **frontend:** Aplicação React (rodando na porta 5173)

### 3. Acessando a Plataforma
- **Frontend (Painel / Catálogo):** http://localhost:5173
- **Documentação da API (Swagger):** http://localhost:3000/api
- **Prisma Studio (Visualização do BD):** http://localhost:5555

### 4. Populando o Banco de Dados (Seed)
O banco de dados é automaticamente populado durante a inicialização do contêiner com um usuário Administrador padrão:
- **E-mail:** admin@plataforma.com
- **Senha:** admin123
