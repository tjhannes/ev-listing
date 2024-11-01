const VehicleDetail = ({ vehicle }) => {
  return (
    <div>
      <h1>
        {vehicle.brand} {vehicle.model}
      </h1>
      <p>Year: {vehicle.year}</p>
      <p>Price: ${vehicle.price}</p>
      <p>Range: {vehicle.range_km} km</p>
      <p>Color: {vehicle.color}</p>
      <p>Condition: {vehicle.condition}</p>
      <p>Battery Capacity: {vehicle.battery_capacity_kWh} kWh</p>
      <p>Charging Speed: {vehicle.charging_speed_kW} kW</p>
      <p>Seats: {vehicle.seats}</p>
      <p>Drivetrain: {vehicle.drivetrain}</p>
      <p>Location: {vehicle.location}</p>
      <p>Autopilot: {vehicle.autopilot ? "Yes" : "No"}</p>
      <p>Kilometer Count: {vehicle.kilometer_count}</p>
      <p>Accidents: {vehicle.accidents ? "Yes" : "No"}</p>
      {vehicle.accidents && (
        <p>Accident Description: {vehicle.accident_description}</p>
      )}
    </div>
  )
}

export default VehicleDetail
