-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "instrutorId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "nivel" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalAulas" INTEGER NOT NULL DEFAULT 0,
    "totalHoras" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modulos" (
    "id" SERIAL NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aulas" (
    "id" SERIAL NOT NULL,
    "moduloId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipoConteudo" TEXT NOT NULL,
    "urlConteudo" TEXT NOT NULL,
    "duracaoMinutos" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matriculas" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "dataMatricula" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataConclusao" TIMESTAMP(3),

    CONSTRAINT "matriculas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progresso_aulas" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "aulaId" INTEGER NOT NULL,
    "dataConclusao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,

    CONSTRAINT "progresso_aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "dataAvaliacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trilhas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "trilhas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trilhas_cursos" (
    "id" SERIAL NOT NULL,
    "trilhaId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "trilhas_cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificados" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "trilhaId" INTEGER,
    "codigoVerificacao" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "certificados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "duracaoMeses" INTEGER NOT NULL,

    CONSTRAINT "planos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assinaturas" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "planoId" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assinaturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" SERIAL NOT NULL,
    "assinaturaId" INTEGER NOT NULL,
    "valorPago" DOUBLE PRECISION NOT NULL,
    "dataPagamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metodoPagamento" TEXT NOT NULL,
    "idTransacaoGateway" TEXT NOT NULL,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nome_key" ON "categorias"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "progresso_aulas_usuarioId_aulaId_key" ON "progresso_aulas"("usuarioId", "aulaId");

-- CreateIndex
CREATE UNIQUE INDEX "trilhas_cursos_trilhaId_cursoId_key" ON "trilhas_cursos"("trilhaId", "cursoId");

-- CreateIndex
CREATE UNIQUE INDEX "certificados_codigoVerificacao_key" ON "certificados"("codigoVerificacao");

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_instrutorId_fkey" FOREIGN KEY ("instrutorId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modulos" ADD CONSTRAINT "modulos_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "modulos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progresso_aulas" ADD CONSTRAINT "progresso_aulas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progresso_aulas" ADD CONSTRAINT "progresso_aulas_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trilhas" ADD CONSTRAINT "trilhas_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trilhas_cursos" ADD CONSTRAINT "trilhas_cursos_trilhaId_fkey" FOREIGN KEY ("trilhaId") REFERENCES "trilhas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trilhas_cursos" ADD CONSTRAINT "trilhas_cursos_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificados" ADD CONSTRAINT "certificados_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificados" ADD CONSTRAINT "certificados_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificados" ADD CONSTRAINT "certificados_trilhaId_fkey" FOREIGN KEY ("trilhaId") REFERENCES "trilhas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assinaturas" ADD CONSTRAINT "assinaturas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assinaturas" ADD CONSTRAINT "assinaturas_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "planos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_assinaturaId_fkey" FOREIGN KEY ("assinaturaId") REFERENCES "assinaturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
