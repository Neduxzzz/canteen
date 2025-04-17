import { IWarehouse } from "@/models/warehouse-model"
import { WarehouseService } from "@/services/WarehouseService"
import { NextRequest } from "next/server"

export async function PUT(
  request: NextRequest,
  res: { params: { warehouseId: string } }
) {
  const warehouse: IWarehouse = await request.json()
  const warehouseService = new WarehouseService()
  await warehouseService.updateWarehouse(warehouse)
  return Response.json({ message: "Pakeitimas sėkmingai įvykdytas" })
}
