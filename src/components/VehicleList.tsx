import { Vehicle } from "@prisma/client";
import Link from "next/link";

type VehicleListProps = {
  vehicles: Vehicle[];
};

const VehicleList = ({ vehicles }: VehicleListProps) => {
  return (
    <ul>
      {vehicles.map((vehicle) => (
        <li key={vehicle.id}>
          <Link href={`/vehicles/${vehicle.id}`}>
            {vehicle.brand} {vehicle.model}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;
