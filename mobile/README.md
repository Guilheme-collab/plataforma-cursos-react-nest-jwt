# 📱 Plataforma de Cursos EAD - Aplicativo Mobile Android

Aplicativo mobile nativo desenvolvido em **React Native** com **TypeScript** e suporte nativo ao **Android Studio**.

Projetado com foco exclusivo na experiência de aprendizado do **Aluno**, com interface fluida, suporte a **sensores de orientação (Modo Retrato e Paisagem / Cinema)** e sincronização em tempo real com o banco de dados PostgreSQL do backend web.

---

## 🚀 Tecnologias e Padrões Utilizados

- **Linguagem:** 100% TypeScript (estritamente tipado, sem JavaScript).
- **Estilização:** Arquitetura desacoplada — cada tela possui seu arquivo dedicado de estilos (`.styles.ts`) utilizando `StyleSheet.create` (sem estilos inline).
- **Navegação:** `@react-navigation/native`, `@react-navigation/native-stack` e `@react-navigation/bottom-tabs`.
- **Ícones Nativos:** `@expo/vector-icons` (`Ionicons`).
- **Persistência Local:** `@react-native-async-storage/async-storage` (armazena tokens JWT e dados do aluno autenticado).
- **Integração HTTP:** `axios` com interceptors para envio automático do cabeçalho `Authorization: Bearer <token>`.
- **Sensores de Tela:** Hook `useOrientation` com escuta em tempo real do giro do aparelho (`useWindowDimensions`), ajustando o player para tela cheia / cinema no modo paisagem.

---

## 📂 Estrutura de Pastas (`mobile/`)

```text
mobile/
├── android/                    # Projeto nativo Gradle completo para abrir no Android Studio
│   ├── app/
│   │   ├── build.gradle
│   │   └── src/main/AndroidManifest.xml
│   ├── build.gradle
│   ├── gradle.properties
│   └── settings.gradle
├── assets/                     # Ícones e splash screen nativos
├── src/
│   ├── contexts/
│   │   └── AuthContext.tsx     # Contexto global de autenticação e sessão com AsyncStorage
│   ├── hooks/
│   │   └── useOrientation.ts   # Detecção dinâmica de orientação (Portrait vs Landscape)
│   ├── models/
│   │   └── index.ts            # Interfaces TypeScript espelhando o banco de dados
│   ├── navigation/
│   │   ├── AppRoutes.tsx       # Pilha de navegação (Login, Cadastro, Principal, Player, etc.)
│   │   └── TabRoutes.tsx       # Navegador de abas inferiores (Início, Matrículas, Planos, Certificados, Perfil)
│   ├── screens/
│   │   ├── LoginScreen/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── LoginScreen.styles.ts
│   │   ├── RegisterScreen/
│   │   │   ├── RegisterScreen.tsx
│   │   │   └── RegisterScreen.styles.ts
│   │   ├── HomeScreen/
│   │   │   ├── HomeScreen.tsx
│   │   │   └── HomeScreen.styles.ts
│   │   ├── CursoDetalhesScreen/
│   │   │   ├── CursoDetalhesScreen.tsx
│   │   │   └── CursoDetalhesScreen.styles.ts
│   │   ├── AulaPlayerScreen/
│   │   │   ├── AulaPlayerScreen.tsx
│   │   │   └── AulaPlayerScreen.styles.ts
│   │   ├── MinhasMatriculasScreen/
│   │   │   ├── MinhasMatriculasScreen.tsx
│   │   │   └── MinhasMatriculasScreen.styles.ts
│   │   ├── PlanosScreen/
│   │   │   ├── PlanosScreen.tsx
│   │   │   └── PlanosScreen.styles.ts
│   │   ├── CertificadosScreen/
│   │   │   ├── CertificadosScreen.tsx
│   │   │   └── CertificadosScreen.styles.ts
│   │   └── PerfilScreen/
│   │       ├── PerfilScreen.tsx
│   │       └── PerfilScreen.styles.ts
│   ├── services/
│   │   ├── api.ts              # Configuração Axios e IP do emulador (10.0.2.2:3000)
│   │   ├── auth.service.ts
│   │   ├── curso.service.ts
│   │   ├── categoria.service.ts
│   │   ├── modulo.service.ts
│   │   ├── aula.service.ts
│   │   ├── matricula.service.ts
│   │   ├── progresso.service.ts
│   │   ├── avaliacao.service.ts
│   │   ├── certificado.service.ts
│   │   ├── plano.service.ts
│   │   ├── assinatura.service.ts
│   │   ├── pagamento.service.ts
│   │   └── usuario.service.ts
│   └── styles/
│       └── theme.ts            # Paleta de cores, espaçamentos e bordas compartilhadas
├── App.tsx                     # Ponto de entrada com Providers
├── index.ts                    # Registro do app
├── package.json
└── tsconfig.json
```

---

## 🛠️ Como Executar

### 1. Iniciar o Banco de Dados e Backend (Docker)
Na raiz do projeto (`crud-react-plataforma-de-cursos`), certifique-se de que o Docker Desktop está em execução e rode:
```bash
docker compose up -d db backend
```
A API NestJS estará respondendo em `http://localhost:3000`.

### 2. Rodando diretamente pelo Android Studio
1. Abra o **Android Studio**.
2. Clique em **File > Open...** (ou "Open an Existing Project").
3. Navegue até a pasta do projeto e selecione a pasta:
   ```text
   crud-react-plataforma-de-cursos\mobile\android
   ```
4. O Android Studio carregará o Gradle e sincronizará as dependências nativas.
5. Em um terminal na pasta `mobile`, inicie o servidor Metro:
   ```bash
   cd mobile
   npm start
   ```
6. No Android Studio, selecione seu dispositivo ou emulador e clique no botão verde **Run ▶**!

### 3. Rodando via linha de comando
Se preferir rodar direto pelo terminal:
```bash
cd mobile
npm run android
```

---

## 🔄 Persistência e Sincronização Web x Mobile
O aplicativo mobile comunica-se diretamente com a API do NestJS e com o banco de dados PostgreSQL compartilhado:
- **Matrículas:** Realizadas no mobile refletem instantaneamente no painel web.
- **Progresso das Aulas:** Ao marcar uma aula como concluída no celular, a barra de progresso no site web é atualizada em tempo real.
- **Avaliações:** Avaliações de 1 a 5 estrelas enviadas pelo aplicativo aparecem no site.
- **Certificados:** Emitidos ao concluir 100% das aulas, com código de validação único reconhecido no sistema.
- **Checkout de Planos:** Simulação de pagamento com PIX, Cartão e Boleto liberando acesso aos cursos vinculados no banco de dados.
