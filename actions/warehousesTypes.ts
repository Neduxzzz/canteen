"use server"

import { IState } from "../src/types/shared-t"
import { WarehouseTypeService } from "@/services/WarehouseTypeService"
import { z } from "zod"

export async function createWarehouseType(
  prevState: IState,
  formData: FormData
): Promise<IState> {
  const schema = z.object({
    title: z.string().min(2, "Pavadinimas turi būti bent 2 simbolių"),
  })

  const rawData = {
    title: formData.get("title"),
  }

  const parse = schema.safeParse(rawData)
  if (!parse.success) {
    return {
      errors: parse.error.flatten().fieldErrors,
      message: "Blogai užpildyti laukai!",
      isSaved: false,
    }
  }

  const warehouseTypeService = new WarehouseTypeService()

  try {
    await warehouseTypeService.create(parse.data)
    return {
      message: "Produktas pridėtas sėkmingai!",
      isSaved: true,
      errors: undefined,
    }
  } catch (error) {
    return {
      message: "Įvyko klaida išsaugant produktą.",
      isSaved: false,
      errors: undefined,
    }
  }
}
