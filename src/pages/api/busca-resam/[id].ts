// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const resam = await prisma.resam.findFirst({
      where: {
        id: String(req.query.id),
      
      },
     
      select: {
        id: true,
        code:true,
        title: true,
        entry: true,
        description: true,
        note:true,
        Exemplo:{
          select:{
            id:true,
            description:true
          }
        }
      },
      
    
    });
    return res.status(200).json(resam);
  }
}
