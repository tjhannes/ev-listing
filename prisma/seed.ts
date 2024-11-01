import { PrismaClient, Vehicle } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

async function main() {
  const fileContent = fs.readFileSync("./data/vehicles_result.json", "utf-8");
  const jsonData = JSON.parse(fileContent) as { data: Vehicle[] };
  const data: Vehicle[] = jsonData.data;

  for (const vehicle of data) {
    await prisma.vehicle.create({
      data: vehicle,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
