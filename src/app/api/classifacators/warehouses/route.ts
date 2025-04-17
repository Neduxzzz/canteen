import { WarehouseTypeService } from "@/services/WarehouseTypeService"
import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const warehouseTypeService = new WarehouseTypeService()
  const warehouseTypes = await warehouseTypeService.getAll()
  return Response.json(warehouseTypes)
}
