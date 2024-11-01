import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const vehicles = await prisma.vehicle.findMany();
    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch vehicles" },
      { status: 500 },
    );
  }
}

export async function POST() {
  try {
    const vehicle = await prisma.vehicle.create({
      data: req.body,
    });
    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create vehicle" },
      { status: 500 },
    );
  }
}

export async function PUT() {
  try {
    const { id, ...data } = req.body;
    const vehicle = await prisma.vehicle.update({
      where: { id: Number(id) },
      data,
    });
    return NextResponse.json(vehicle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update vehicle" },
      { status: 500 },
    );
  }
}
