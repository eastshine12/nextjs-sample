// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';


export default async function handler(req, res) {

  BigInt.prototype.toJSON = function() {       
    return this.toString()
  }

  const prisma = new PrismaClient();
  if(req.method === 'GET') {
    const users =  await prisma.tb_card.findMany();
    if(users.length > 0) {
      return res.send(users);
    } else {
      return res.send("users not exist");
    }
  } else {
    return res.send("");
  }

}
