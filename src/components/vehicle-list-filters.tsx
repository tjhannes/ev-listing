"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

type VehicleListFiltersProps = {
  brands: string[];
  onBrandChange: (brand: string) => void;
  onRangeChange: (range: string) => void;
  onSortChange: (sort: string) => void;
};

export const VehicleListFilters = ({
  brands,
  onBrandChange,
  onRangeChange,
  onSortChange,
}: VehicleListFiltersProps) => {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <Select onValueChange={(value) => onBrandChange(value)}>
        <SelectTrigger className="w-[140px] bg-gray-100">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All brands</SelectItem>
          {brands.map((brand) => (
            <SelectItem key={brand} value={brand}>
              {brand}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onRangeChange(value)}>
        <SelectTrigger className="w-[100px] bg-gray-100">
          <SelectValue placeholder="Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All ranges</SelectItem>
          <SelectItem value="low">{`<300km`}</SelectItem>
          <SelectItem value="mid">300-500km</SelectItem>
          <SelectItem value="high">{`>500km`}</SelectItem>
        </SelectContent>
      </Select>

      <div className="ml-auto">
        <Select onValueChange={(value) => onSortChange(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
