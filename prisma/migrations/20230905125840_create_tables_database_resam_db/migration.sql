-- CreateTable
CREATE TABLE "tb_resam" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Sem titulo',
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "entry" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_resam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_exemples" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "resam_id" TEXT NOT NULL,

    CONSTRAINT "tb_exemples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_administrative" (
    "id" TEXT NOT NULL,
    "measure" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "resam_id" TEXT NOT NULL,
    "resamId" TEXT NOT NULL,

    CONSTRAINT "tb_administrative_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_exemples" ADD CONSTRAINT "tb_exemples_resam_id_fkey" FOREIGN KEY ("resam_id") REFERENCES "tb_resam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_administrative" ADD CONSTRAINT "tb_administrative_resam_id_fkey" FOREIGN KEY ("resam_id") REFERENCES "tb_resam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
