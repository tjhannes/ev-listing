"use client";

import type { Vehicle } from "@prisma/client";
import { useMemo, useState } from "react";
import { VehicleListFilters } from "./vehicle-list-filters";
import { VehicleListItem } from "./vehicle-list-item";

type VehicleListProps = {
  vehicles: Vehicle[];
};

export const VehicleList = ({ vehicles }: VehicleListProps) => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  const BRANDS = useMemo(() => {
    const uniqueBrands = [
      ...new Set(vehicles?.map((vehicle) => vehicle.brand)),
    ];
    return uniqueBrands || [];
  }, [vehicles]);

  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((vehicle) => !selectedBrand || vehicle.brand === selectedBrand)
      .filter((vehicle) => {
        if (selectedRange === "low") {
          return vehicle.range_km < 300;
        } else if (selectedRange === "mid") {
          return vehicle.range_km >= 300 && vehicle.range_km <= 500;
        } else if (selectedRange === "high") {
          return vehicle.range_km > 500;
        }
        return true;
      })
      .sort(
        selectedSort === "price-asc"
          ? (a, b) => a.price - b.price
          : selectedSort === "price-desc"
            ? (a, b) => b.price - a.price
            : () => 0,
      );
  }, [vehicles, selectedBrand, selectedRange, selectedSort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Get your next Electic Vehicle</h1>

      <VehicleListFilters
        brands={BRANDS}
        onBrandChange={setSelectedBrand}
        onRangeChange={setSelectedRange}
        onSortChange={setSelectedSort}
      />

      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredVehicles.map((vehicle) => (
            <VehicleListItem key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-gray-500">No vehicles found</div>
      )}
    </div>
  );
};
