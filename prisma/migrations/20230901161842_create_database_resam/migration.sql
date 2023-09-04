-- CreateTable
CREATE TABLE "tb_resam" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT 'Sem titulo',
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "entry" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "tb_exemples" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "resam_id" TEXT NOT NULL,
    CONSTRAINT "tb_exemples_resam_id_fkey" FOREIGN KEY ("resam_id") REFERENCES "tb_resam" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_administrative" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "measure" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "resam_id" TEXT NOT NULL,
    "resamId" TEXT NOT NULL,
    CONSTRAINT "tb_administrative_resam_id_fkey" FOREIGN KEY ("resam_id") REFERENCES "tb_resam" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
