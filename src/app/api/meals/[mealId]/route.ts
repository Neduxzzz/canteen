import { MealTypeService } from "@/services/MealTypeService"
import { NextRequest } from "next/server"

export async function PUT(
  request: NextRequest,
  context: { params: { mealId: string } }
) {
  const { mealId } = await Promise.resolve(context.params)
  const data = await request.json()
  const mealTypeService = new MealTypeService()
  await mealTypeService.updateMealType(mealId, data)
  return Response.json({ message: "Atnaujinta sėkmingai" })
}

export async function DELETE(
  request: NextRequest,
  context: { params: { mealId: string } }
) {
  const { mealId } = await Promise.resolve(context.params)
  const mealTypeService = new MealTypeService()
  await mealTypeService.deleteMealType(mealId)
  return Response.json({ message: "Ištrinta sėkmingai" })
}
