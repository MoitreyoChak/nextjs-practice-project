import { PrismaClient } from "@prisma/client";

console.log("File runs...")
const prismaSingletonClient = () => {
    console.log("generating new prisma client...");
    return new PrismaClient();
}

const prisma = globalThis.prisma ?? prismaSingletonClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;