import { WarehouseTypeService } from "@/services/WarehouseTypeService"
import { NextRequest } from "next/server"

export async function PUT(
  request: NextRequest,
  context: { params: { warehouseId: string } }
) {
  const { warehouseId } = await Promise.resolve(context.params)

  const data = await request.json()

  const warehouseTypeService = new WarehouseTypeService()
  await warehouseTypeService.updateWarehouseType(warehouseId, data)

  return Response.json({ message: "Atnaujinimas sėkmingas" })
}

export async function DELETE(
  request: NextRequest,
  context: { params: { warehouseId: string } }
) {
  const { warehouseId } = await Promise.resolve(context.params)

  const warehouseTypeService = new WarehouseTypeService()
  await warehouseTypeService.deleteWarehouseType(warehouseId)

  return new Response(JSON.stringify({ message: "Įrašas ištrintas" }), {
    status: 200,
  })
}
