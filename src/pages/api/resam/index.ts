// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IResam } from "@/Interface";
import { prisma } from "@/prisma";
import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const label = String(Object.keys(req.query)[0])
    const value = `"%${req.query[label]}%"`
    
    const query = `SELECT * FROM tb_resam WHERE ${label} LIKE "%${value}%"`
    console.log(query);
  const resam =  await prisma.$queryRaw`SELECT * FROM tb_resam WHERE ${Prisma.raw(label)} LIKE ${Prisma.raw(value)};`
    
    
    return res.status(200).json(resam);
  }
}
