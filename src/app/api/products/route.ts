import { NextResponse } from "next/server"
import {WarehouseService} from "../../../services/WarehouseService"

const warehouseService = new WarehouseService()

export async function GET() {
  const warehouses = await warehouseService.getAll()
  return NextResponse.json(warehouses)
}

export async function POST(request: Request) {
  const data = await request.json()
  if (!data.typeId) {
    return NextResponse.json({ message: "Produkto pavadinimas privalomas" }, { status: 400 })
  }
  const created = await warehouseService.create(data)
  return NextResponse.json(created, { status: 201 })
}
