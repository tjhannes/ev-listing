import type { Vehicle } from "@prisma/client";
import VehicleList from "~/components/VehicleList";

async function fetchVehicles() {
  const response = await fetch(`${process.env.BASE_URL}/api/vehicles`);
  const data: Vehicle[] = await response.json();
  return data;
}

export default async function HomePage() {
  const vehicles = await fetchVehicles();

  return (
    <div>
      <h1>Vehicle Listing</h1>
      <VehicleList vehicles={vehicles} />
    </div>
  );
}
