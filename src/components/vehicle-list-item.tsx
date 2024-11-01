import { Vehicle } from "@prisma/client";
import React from "react";
import { Button } from "./ui/button";
import { faker } from "@faker-js/faker";
import Link from "next/link";

type VehicleListItemProps = {
  vehicle: Vehicle;
};

export const VehicleListItem = ({ vehicle }: VehicleListItemProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white">
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
        <Link href={`/vehicle/${vehicle.id}`}>
          <Button className="w-full">See details</Button>
        </Link>
      </div>
    </div>
  );
};
