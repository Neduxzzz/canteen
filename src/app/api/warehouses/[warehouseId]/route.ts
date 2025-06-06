import { IWarehouse } from "../../../../../models/warehouse-model"
import { WarehouseService } from "@/services/WarehouseService"
import { NextRequest } from "next/server"

export async function PUT(
  request: NextRequest,
  { params }: { params: { warehouseId: string } }
) {
  const warehouse: IWarehouse = await request.json()
  const warehouseService = new WarehouseService()
  await warehouseService.updateWarehouse(warehouse)
  return Response.json({ message: "Pakeitimas sėkmingai įvykdytas" })
}

export async function DELETE(
  request: NextRequest,
  context: Promise<{ params: { warehouseId: string } }>
) {
  const resolvedContext = await context
  const warehouseId = resolvedContext.params.warehouseId

  const warehouseService = new WarehouseService()
  await warehouseService.deleteWarehouse(warehouseId)

  return Response.json({ message: "Įrašas ištrintas" })
}
