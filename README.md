# Resam — Regulamento de Sanções e Multas (SPTrans) ✅

**Visão geral**

Este projeto é uma aplicação administrativa construída em Next.js + TypeScript que auxilia no enquadramento das infrações previstas pelo regulamento de sanções e multas da SPTrans. A aplicação permite:

- Buscar e visualizar enquadramentos (resam) e sua normativa associada. 🔎
- Visualizar exemplos e documentações relacionadas a cada enquadramento. 📄
- Iniciar processo de AIA (medida administrativa) quando aplicável (fluxo inicial já previsto no UI; implementar backend adicional conforme necessário). ⚖️

---

## Principais funcionalidades ✨

- Página com listagem de **enquadramentos** e busca por descrição (`/`).
- Visualização detalhada da infração (`/view-infracao/[id]`) com descrição, código, entradas, exemplos e botão **AIA**. 
- Endpoints API para consulta e criação de registros (`/api/resam`, `/api/busca-resam/[id]`).
- Estrutura de dados com Prisma (`prisma/schema.prisma`) incluindo modelos `Resam`, `Exemple` e `Administrative` (uso para medidas/AIA).

---

## Varredura do código — achados rápidos ✅

- Modelos e seed: `prisma/schema.prisma`, `prisma/seed.ts` (dados de exemplo). 
- Serviços/DB: `src/prisma/service/resam.ts` (queries helper). 
- API: `src/pages/api/resam/index.ts` (GET/POST) e `src/pages/api/busca-resam/[id].ts` (busca por id).
- Context/Hooks: `src/data/context/ResamContext.tsx` e `src/data/hook/useResam.ts` (consumo de API na UI).
- Páginas: `src/pages/index.tsx` (listagem), `src/pages/view-infracao/[id].tsx` (detalhe), `src/pages/exemplos/[id].tsx` (exemplos/documentos).

> Observação: o botão **AIA** já existe na interface (`/view-infracao/[id]`), porém o fluxo de registro de medida administrativa (persistência e endpoint dedicado) pode necessitar de implementação adicional conforme regras processuais.

---

## Requisitos 🧰

- Node.js v19 (conforme `package.json`)
- PostgreSQL (ou outro compatível com Prisma, configurado via `DATABASE_URL`)
- Variáveis de ambiente (ver seção abaixo)

---

## Variáveis de ambiente (mínimas) 📌

- `NEXT_PUBLIC_DATABASE_URL` — URL do banco para o Prisma.
- `NEXT_PUBLIC_BASE_URL` — Base usada pelo `ResamContext` para chamadas à API (ex.: `http://localhost:3000/api`).

Firebase (opcional, para autenticação):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

---

## Instalação & execução 🔧

1. Instale dependências:

```bash
npm install
```

2. Configure as variáveis de ambiente (.env.local) com os itens acima.

3. Preparar o banco e rodar migrations / seed:

```bash
npx prisma migrate dev --name init
npm run seed
```

4. Rodar em modo de desenvolvimento:

```bash
npm run dev
# Abra http://localhost:3000
```

---

## Endpoints importantes 🚀

- GET `/api/resam` — lista/consulta por filtros
- POST `/api/resam` — criar novo enquadramento (uso administrativo)
- GET `/api/busca-resam/[id]` — buscar enquadramento por id

Arquivos:
- `src/pages/api/resam/index.ts`
- `src/pages/api/busca-resam/[id].ts`

---

## Como o AIA (medida administrativa) deve funcionar — sugestão 💡

1. Ao clicar em **AIA** em `/view-infracao/[id]`, abrir um modal/form para coletar informações da medida (tipo de medida, fundamentação, anexo de documentos, responsável, data).
2. Submeter para um endpoint dedicado (`POST /api/resam/[id]/administrative` ou `/api/administrative`) que cria um registro em `tb_administrative` (modelo `Administrative`).
3. Registrar logs/estados do processo e permitir visualizar documentos vinculados (armazenamento em S3/ImageKit ou links externos).

Observação: o modelo `Administrative` já existe na `schema.prisma`, então a persistência na DB está prevista; falta conexão UI ↔ endpoint para completar o fluxo.

---

## Estrutura do projeto — arquivos relevantes 🔎

- `src/pages/index.tsx` — listagem de enquadramentos
- `src/pages/view-infracao/[id].tsx` — detalhe da infração (botão AIA)
- `src/pages/exemplos/[id].tsx` — páginas de exemplos/documentação
- `src/data/context/ResamContext.tsx` — funções de busca e consulta usadas pela UI
- `src/prisma/service/resam.ts` — helpers de acesso ao DB via Prisma
- `prisma/schema.prisma` & `prisma/seed.ts` — modelo de dados e seed

---

## Sugestões de próximos passos / melhorias 🛠️

- Implementar endpoint para criação de AIA e integração completa com modal/form na UI. ✅
- Adicionar upload/gestão de documentos vinculados ao enquadramento. ✅
- Permissões/Controle de acesso (roles: operador, fiscal, admin).
- Testes automatizados (unitários e E2E). 🎯
- Documentação normativa interna (linkar PDFs ou URLs oficiais da SPTrans por enquadramento).

---

## Contribuindo 🤝

1. Fork e branch específico por feature.
2. Propor PR com descrição clara e link para issue (quando houver).
3. Rodar lint e testes antes de submeter.

---

## Licença

Coloque aqui a licença do projeto (ex.: MIT) conforme desejado.

---

Se quiser, aplico essas melhorias (ex.: implementar fluxo AIA, criar endpoint e formulário UI, ou adicionar upload de documentos). 🔧
