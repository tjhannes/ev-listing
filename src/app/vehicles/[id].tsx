import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import VehicleDetail from "../../components/VehicleDetail";

const VehicleDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [vehicle, setVehicle] = useState<any>(null);

  useEffect(() => {
    const fetchVehicle = async (vehicleId: string) => {
      try {
        const response = await fetch(`/api/vehicles/${vehicleId}`);
        const data = await response.json();
        setVehicle(data);
      } catch (error) {
        console.error("Failed to fetch vehicle data:", error);
      }
    };

    if (typeof id === "string") {
      fetchVehicle(id);
    }
  }, [id]);

  return (
    <div>
      {vehicle ? <VehicleDetail vehicle={vehicle} /> : <p>Loading...</p>}
    </div>
  );
};

export default VehicleDetailPage;
