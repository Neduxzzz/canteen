import { NextResponse } from "next/server"
import { MealTypeService } from "@/services/MealTypeService"

const mealService = new MealTypeService()

export async function GET() {
  try {
    const meals = await mealService.getAll()
    return NextResponse.json(meals)
  } catch (error) {
    return NextResponse.json(
      { message: "Klaida gaunant duomenis", error: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (!data.title || data.title.length < 2) {
      return NextResponse.json(
        { message: "Pavadinimas per trumpas" },
        { status: 400 }
      )
    }

    const created = await mealService.create({ title: data.title })

    return NextResponse.json(
      { message: "Įrašyta sėkmingai", id: created._id },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Klaida įrašant", error: (error as Error).message },
      { status: 500 }
    )
  }
}
