import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const count = await prisma.item.count();
    console.log(`Item count: ${count}`);
    const items = await prisma.item.findMany();
    console.log(items);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
