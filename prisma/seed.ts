import { prisma } from "../src/prisma/index";

const resam = [
  {
    title: "Ignição com defeito",
    code: "L01",
    description: "Veículo com o conjunto da ignição do motor",
    note: "Constatar junto ao operador ou flagrar sendo empurrado para funcionar.",
    entry: "prefixo",
  },
  {
    title: "Ignição com defeito",
    code: "M01",
    description:
      "Veículo ou equipamento em mau estado de conservação ou em desacordo com o determinado pela SPTrans, no que se refere à padronização de identidade visual, tais como: dimensões,localização e cores da pintura, layout interno, placas, painéis informativos,     legendas, números, prefixos e demais inscrições, inclusive, de publicidade ou qualquer outro item de comunicação visual.",
    note: "Constatar junto ao operador ou flagrar sendo empurrado para funcionar.",
    entry: "prefixo,linha",
  },
  {
    title: "elevador ou rampa inoperante",
    code: "G01",
    description:
      "Veículo ou equipamento em mau estado de conservação ou em desacordo com o determinado pela SPTrans, no que se refere à padronização de identidade visual, tais como: dimensões,localização e cores da pintura, layout interno, placas, painéis informativos,     legendas, números, prefixos e demais inscrições, inclusive, de publicidade ou qualquer outro item de comunicação visual.",
    note: "Constatar junto ao operador ou flagrar sendo empurrado para funcionar.",
    entry: "prefixo",
  },
  {
    title: "Itinerário ",
    code: "GR07",
    description:
      "Deixar de cumprir itinerário ou alterar ponto terminal estabelecido pela SPTrans.",
    note: "■ Lavrar com o local da ocorrência (Via e numeral da qual não faz parte do itinerário ou ponto terminal). ■ Verificar se existe   obstrução no itinerário ou ponto terminal.",
    entry: "prefixo",
  },
];
async function main() {
  for (const data of resam) {
    const { id } = await prisma.resam.create({
      data,
    });
    console.log(id);
  }
}

