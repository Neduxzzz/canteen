import { WarehouseService } from "@/services/WarehouseService"
import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const warehouseService = new WarehouseService()
  const Warehouses = await WarehouseService.getCertificates()
  return Response.json(Warehouses)
}

export async function POST(request: NextRequest) {
  const res = await request.json()
  const warehouseService = new WarehouseService()
  await warehouseService.saveWarehouse(res)
  return Response.json({ message: "Duomenys išsaugoti" })
}
