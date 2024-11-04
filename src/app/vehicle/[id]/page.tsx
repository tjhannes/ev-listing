import type { Vehicle } from "@prisma/client";
import { VehicleDetail } from "~/components/vehicle-detail";

async function fetchVehicle(id: string) {
  const response = await fetch(`${process.env.BASE_URL}/api/vehicle?id=${id}`);
  const data: Vehicle = (await response.json()) as Vehicle;
  return data;
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const vehicle = await fetchVehicle(id);

  return <VehicleDetail vehicle={vehicle} />;
}
