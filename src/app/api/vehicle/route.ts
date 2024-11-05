import { PrismaClient, type Vehicle } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const id = params.get("id");
    const vehicle = await prisma.vehicle.findUnique({
      where: { id: Number(id) },
    });
    if (vehicle) {
      return NextResponse.json(vehicle, { status: 200 });
    } else {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch vehicle" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!req.body) {
      return NextResponse.json(
        { error: "Missing vehicle data" },
        { status: 400 },
      );
    }
    // TODO validate the request body to be a Vehicle and to have a unique id
    const body = (await req.json()) as Vehicle;
    const vehicle = await prisma.vehicle.create({
      data: body,
    });
    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    // TODO send more meaning full error message to the client, e.g.
    return NextResponse.json(
      { error: "Failed to create vehicle" },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const id = params.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Missing vehicle id" },
        { status: 400 },
      );
    }
    // TODO validate that the id exists
    if (!req.body) {
      return NextResponse.json(
        { error: "Missing vehicle data" },
        { status: 400 },
      );
    }
    // TODO validate the request body to be a Vehicle
    const data = (await req.json()) as Vehicle;
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

export async function DELETE(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const id = params.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Missing vehicle id" },
        { status: 400 },
      );
    }
    // TODO validate that the id exists
    await prisma.vehicle.delete({ where: { id: Number(id) } });
    return NextResponse.json({ status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete vehicle" },
      { status: 500 },
    );
  }
}
