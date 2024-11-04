import { faker } from "@faker-js/faker";
import type { Vehicle } from "@prisma/client";
import Link from "next/link";

type VehicleDetailProps = {
  vehicle: Vehicle;
};

export const VehicleDetail = ({ vehicle }: VehicleDetailProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[400px] overflow-hidden rounded-lg bg-white">
        <Link
          href={`/`}
          className="mb-4 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        >
          Back
        </Link>

        <div className="relative">
          <img
            src={faker.image.urlLoremFlickr({ category: "car" })}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="h-64 w-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{`${vehicle.brand} ${vehicle.model}`}</h3>
              <p className="text-sm text-gray-600">{vehicle.condition}</p>
            </div>
            <span className="font-bold">${vehicle.price}</span>
          </div>
          <div className="my-2 flex justify-between">
            <div className="text-center">
              <p className="text-sm text-gray-600">{vehicle.range_km}</p>
              <p className="text-xs text-gray-600">km</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">{vehicle.kilometer_count}</p>
              <p className="text-xs text-gray-600">km</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {vehicle.battery_capacity_kWh}
              </p>
              <p className="text-xs text-gray-600">kWh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
