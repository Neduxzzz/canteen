"use server"
import { IState } from "../src/types/shared-t"
import { postApi, putApi } from "@/utils/server-api"
import { z } from "zod"

export async function createWarehouses(
  prevState: IState,
  formData: FormData
): Promise<IState> {
  const schema = z.object({
    id: z.coerce.string().optional(),
    typeId: z.coerce.string(),
    company: z.string().min(2),
  })

  const rawFormData = {
    id: formData.has("id") ? formData.get("id") : undefined,
    typeId: formData.get("typeId"),
    company: formData.get("company"),
  }

  const parse = schema.safeParse(rawFormData)

  if (!parse.success) {
    return {
      errors: parse.error.flatten().fieldErrors,
      message: "Blogai užpildyti laukai!",
      isSaved: false,
    }
  }
  const dto = parse.data
  if (!dto?.id) {
    await postApi("/api/warehouses", dto)
    return { message: "Duomenys sekmingai išsiųsti", isSaved: true }
  }
  await putApi(`/api/warehouses/${dto.id}`, dto)
  return { message: "Atnaujinti duomenys sėkmingai", isSaved: true }
}
