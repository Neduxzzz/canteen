import { WarehouseTypeService } from "@/services/WarehouseTypeService"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const warehouseTypeService = new WarehouseTypeService()
  const types = await warehouseTypeService.getAll()
  return Response.json(types)
}
