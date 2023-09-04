import { prisma } from "..";

export async function allResam() {
  try {
   const resam = await prisma.resam.findMany({
    select:{
      id:true,
      title:true,
      code:true,
      description:true,
      note:true,
      entry:true
    }
   })
    return resam;
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
  }
}
export async function uniqueResam() {
   try {

const resam = await prisma.resam.findFirst({
 where:{
  id:'e4db83ba-4b44-4089-85a5-cf2662bc96f3'
 }
})

  //  const resam = await prisma.resam.findFirst({
  //   where:{
  //     id
  //   },
  //   select:{
  //     id:true,
  //     title:true,
  //     code:true,
  //     description:true,
  //     note:true,
  //     entry:true
  //   }
  //  })
  //   return resam;
return resam
  
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
  }
}


