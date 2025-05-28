import { WarehouseTypeService } from "@/services/WarehouseTypeService"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const warehouseTypeService = new WarehouseTypeService()
    const types = await warehouseTypeService.getAll()
    const transformed = types.map((type) => ({
      id: type._id.toString(),
      title: type.title,
    }))

    return new Response(JSON.stringify(transformed), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: "Serverio klaida", error }), {
      status: 500,
    })
  }
}

export async function POST(request: NextRequest) {
  try {
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

    const warehouseTypeService = new WarehouseTypeService()
    const newType = await warehouseTypeService.create({ title })

    return new Response(JSON.stringify(newType), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: "Serverio klaida", error }), {
      status: 500,
    })
  }
}
