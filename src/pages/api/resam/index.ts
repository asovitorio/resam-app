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
    const label = String(Object.keys(req.query)[0]);
    const value = `'%${req.query[label]}%'`;
    try {
      const query = `SELECT * FROM tb_resam`;
      console.log(query);
      const resam =
        await prisma.$queryRaw`SELECT * FROM tb_resam WHERE ${Prisma.raw(label)} LIKE ${Prisma.raw(value)}`;
      // const resam =  await prisma.resam.findMany()
      return res.status(200).json(resam);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json({erro:error.message});
      }
    }
  }
  if (req.method === "POST") {
    return res.status(200).json({ msg: "teste" });
  }
}
