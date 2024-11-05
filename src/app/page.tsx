import type { Vehicle } from "@prisma/client";
import ErrorBoundary from "~/components/error-boundary";
import { VehicleList } from "~/components/vehicle-list";

async function fetchVehicles() {
  try {
    const response = await fetch(
      `${process.env.BASE_URL ?? "localhost:3000"}/api/vehicles`,
    );
    const data: Vehicle[] = (await response.json()) as Vehicle[];
    return { error: null, data: data };
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
    return { error: error, data: [] };
  }
}

export default async function HomePage() {
  const { error, data } = await fetchVehicles();

  if (error) {
    return (
      <div>
        <h2>Oops, there is an error!</h2>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <VehicleList vehicles={data} />
    </ErrorBoundary>
  );
}
