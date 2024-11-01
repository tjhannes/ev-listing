-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "range_km" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "battery_capacity_kWh" DOUBLE PRECISION NOT NULL,
    "charging_speed_kW" DOUBLE PRECISION NOT NULL,
    "seats" INTEGER NOT NULL,
    "drivetrain" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "autopilot" BOOLEAN NOT NULL,
    "kilometer_count" INTEGER NOT NULL,
    "accidents" BOOLEAN NOT NULL,
    "accident_description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Vehicle_brand_model_idx" ON "Vehicle"("brand", "model");
