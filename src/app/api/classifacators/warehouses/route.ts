import { WarehouseTypeService } from "@/services/WarehouseTypeService"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const warehouseTypeService = new WarehouseTypeService()
  const types = await warehouseTypeService.getAll()
  return Response.json(types)
}

export async function POST(request: NextRequest) {
  const warehouseTypeService = new WarehouseTypeService()
  const body = await request.json()
  const { title } = body

  if (!title || title.length < 2) {
    return new Response(
      JSON.stringify({
        message: "Pavadinimas privalomas ir turi būti bent 2 simboliai",
      }),
      { status: 400 }
    )
  }

  const newType = await warehouseTypeService.create({ title })
  return new Response(JSON.stringify(newType), { status: 201 })
}
